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
    store: null,
    element: null,
    output: null,
    _observableHandler: null,
    constructor: function(model, view, element){
      var args = {
        element: element
      };
      declare.safeMixin(this, args);
      this._create(model, view);
    },
    _create: function(model, template){
      var results, observableHandler, renderTemplate, container, currentData;

      if(this.element){
        // Query the DOM once right at the beginning so we never have to do it again
        container = query(this.element);
      }

      this.store = new MemoryStore({
        data: model,
        idProperty: 'id'
      });

      this.store = Observable(this.store);

      results = this.store.query({});

      // Hitch it so the observable's this isn't pointed at the DOMWindow
      renderTemplate = lang.hitch(this, function(object, prevIndex, newIndex){
        var elementToReplace, elementToRemove;
        // Render template into output right away
        this.output = template(object);

        if(container){
          if(prevIndex > -1 && newIndex > -1){
            // If both are greater than -1, an object was modified, we need to replace it
            elementToReplace = container.children()[newIndex];
            domConstruct.place(this.output, elementToReplace, 'replace');
          } else {
            // An object was added or removed
            if(prevIndex > -1){
              // existing object removed, we need to remove it
              elementToRemove = container.children()[prevIndex];
              domConstruct.destroy(elementToRemove);
            }
            if(newIndex > -1){
              // new object inserted, we need to add it
              container.forEach(function(containerNode){
                domConstruct.place(this.output, containerNode, newIndex);
              }, this);
            }
          }
        }
      });

      this._observableHandler = results.observe(renderTemplate, true);

      if(container && container.children().length === 0){
        // Pre-populate the template
        currentData = this.store.query({});
        array.forEach(currentData, function(entry, idx){
          this.output = template(entry);
          container.append(output);
        });
      }
    }
  });

});