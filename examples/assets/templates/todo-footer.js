define(["jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;completed>0||remaining>0?(buf.push("<footer"),buf.push(attrs({id:"footer"},{})),buf.push("><span"),buf.push(attrs({id:"todo-count"},{})),buf.push("><strong>"+escape((interp=remaining)==null?"":interp)+"</strong>"),remaining===1?buf.push(" item left"):buf.push(" items left"),buf.push("</span><button"),buf.push(attrs({id:"clear-completed"},{})),buf.push(">Clear completed ("+escape((interp=completed)==null?"":interp)+")</button></footer>")):(buf.push("<footer"),buf.push(attrs({id:"footer",style:"display: none;"},{style:!0})),buf.push("></footer>"))}return buf.join("")}})