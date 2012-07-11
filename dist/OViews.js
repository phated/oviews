/*! OViews - v0.2.0 - 2012-07-10
* https://github.com/phated/oviews
* Copyright (c) 2012 Blaine Bublitz; Licensed MIT */

define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/array',
  'dojo/store/Memory',
  'dojo/store/Observable',
  'dojo/dom-construct',
  'dojo/query',
  'dojo/NodeList-manipulate',
  'dojo/NodeList-traverse'
], function(declare, lang, array, MemoryStore, Observable, domConstruct, query){

  return declare(null, {
    initialData: null,
    parentElement: null, // Must be a NodeList - TODO: check if NodeList, else turn into one
    selector: null,
    model: null,
    view: null,
    idProperty: 'id',
    modelQuery: {},
    _template: null,
    _observableHandler: null,
    _renderedTemplate: null,
    constructor: function(args){
      declare.safeMixin(this, args);
      this._create();
    },
    _render: function(object, prevIndex, newIndex){
      var elementToReplace, elementToRemove;
      // Render template right away
      this._renderedTemplate = this._template(object);

      if(this.parentElement){
        if(prevIndex > -1 && newIndex > -1){
          // If both are greater than -1, an object was modified, we need to replace it
          elementToReplace = this.parentElement.children()[newIndex];
          domConstruct.place(this._renderedTemplate, elementToReplace, 'replace');
        } else {
          // An object was added or removed
          if(prevIndex > -1){
            // existing object removed, we need to remove it
            elementToRemove = this.parentElement.children()[prevIndex];
            domConstruct.destroy(elementToRemove);
          }
          if(newIndex > -1){
            // new object inserted, we need to add it
            this.parentElement.forEach(function(containerNode){
              domConstruct.place(this._renderedTemplate, containerNode, newIndex);
            }, this);
          }
        }
      }
    },
    _create: function(){
      var store, results;

      // Make sure we are rendering the view in the context of this object (not DOMWindow)
      this._template = lang.hitch(this, this.view);

      // parentElement has priority over selector (for efficiency?)
      if(!this.parentElement && this.selector){
        // Query the DOM once and save it in object so we never have to do it again
        this.parentElement = query(this.selector);
      }

      // Create new store with initial data and an id property
      // TODO: abstract MemoryStore into any kind of Dojo Store
      store = new MemoryStore({
        data: this.initialData,
        idProperty: this.idProperty
      });

      // Create the Obserable Store as the model
      this.model = Observable(store);

      // Query the model for the subset that we are going to observe
      results = this.model.query(this.modelQuery);

      // Hitch it so the observable's this isn't pointed at the DOMWindow
      this._render = lang.hitch(this, this._render);

      // Bind the _render handler to our results
      this._observableHandler = results.observe(this._render, true);

      // Render initial data into the DOM
      this._initialRender();
    },
    _initialRender: function(){
      var currentData;
      if(this.parentElement){
        // Pre-populate the template
        currentData = this.model.query({});
        array.forEach(currentData, function(entry, idx){
          this._render(entry, -1, idx);
        }, this);
      }
    }
  });

});