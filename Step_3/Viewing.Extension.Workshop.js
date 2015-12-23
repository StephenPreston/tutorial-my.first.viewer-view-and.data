  ///////////////////////////////////////////////////////////////////////////////
  // Demo Workshop Viewer Extension
  // by Philippe Leefsma, April 2015
  //
  ///////////////////////////////////////////////////////////////////////////////

  AutodeskNamespace("Viewing.Extension");

  Viewing.Extension.Workshop = function (viewer, options) {

    /////////////////////////////////////////////////////////////////
    //  base class constructor
    //
    /////////////////////////////////////////////////////////////////

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _self = this;
    var _viewer = viewer;

    /////////////////////////////////////////////////////////////////
    // load callback: invoked when viewer.loadExtension is called
    //
    /////////////////////////////////////////////////////////////////

    _self.load = function () {

      _viewer.addEventListener(
      Autodesk.Viewing.SELECTION_CHANGED_EVENT,
      _self.onSelectionChanged);

        return true;
    };

    /////////////////////////////////////////////////////////////////
    // unload callback: invoked when viewer.unloadExtension is called
    //
    /////////////////////////////////////////////////////////////////

    _self.unload = function () {

    console.log('Viewing.Extension.Workshop unloaded');

    return true;

    };
      
      
      
      /////////////////////////////////////////////////////////////////
      // selection changed callback
      //
      /////////////////////////////////////////////////////////////////
      _self.onSelectionChanged = function (event) {

        // event is triggered also when component is unselected

        // in that case event.dbIdArray is an empty array
        if(event.dbIdArray.length) {

          var dbId = event.dbIdArray[0];
          console.log("Object selected. dbId = " + dbId);

          // do stuff with selected component
        }
        else {
          // all components unselected
            // Note that this point in the code is reached once if you click escape to clear the current selection
            //  but twice if you click in space. 
            // Think of the latter case as first selecting nothing, and then clearing the selection.
            console.log("All objects unselected");
        }
      };

  };




  
  
  

  /////////////////////////////////////////////////////////////////
  // sets up inheritance for extension and register
  //
  /////////////////////////////////////////////////////////////////

  Viewing.Extension.Workshop.prototype =
    Object.create(Autodesk.Viewing.Extension.prototype);

  Viewing.Extension.Workshop.prototype.constructor =
    Viewing.Extension.Workshop;

  Autodesk.Viewing.theExtensionManager.registerExtension(
    'Viewing.Extension.Workshop',
    Viewing.Extension.Workshop);