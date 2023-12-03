const nameDict = {
  1: "Reference/3DHistech/CMU-1.mrxs",
  2: "Reference/3DHistech/CMU-2.mrxs",
  3: "Reference/3DHistech/CMU-3.mrxs",
  4: "Reference/Annotations/PDL1_05850004B0016S.mrxs",
  5: "Reference/Annotations/HE_05850004B0001S.mrxs",
  6: "d0044_slidebox2/case 1A/case1_ERxt_-eWAAINRHW.jpg",
  7: "d0044_slidebox2/case 1A/case1_ERxt3MiX0AEx7cr.jpg",
  8: "d0044_slidebox2/case 1A/case1_ERxt8M8XUAE6hro.jpg",
  9: "d0044_slidebox2/case 1B/case2_ERvB0n2WkAMrUbH.jpg",
  10: "cases2/fuhrmann/Assessment set/07250086C0001S.mrxs",
  11: "cases2/fuhrmann/Assessment set/07250133C0001S.mrxs",
  12: "cases2/fuhrmann/Assessment set/07250166C0001S.mrxs",
  13: "cases2/fuhrmann/Assessment set/07250169C0001S.mrxs",
  14: "cases2/fuhrmann/Assessment set/07250174C0001S.mrxs",
  15: "cases2/fuhrmann/Assessment set/07250189C0001S.mrxs",
  16: "cases2/fuhrmann/Assessment set/07250194C0001S.mrxs",
  17: "cases2/fuhrmann/Assessment set/07250204C0001S.mrxs",
  18: "cases2/fuhrmann/Assessment set/07250214C0001S.mrxs",
  19: "cases2/fuhrmann/Assessment set/07250219C0001S.mrxs",
  20: "cases2/fuhrmann/Assessment set/07250235C0001S.mrxs",
  21: "cases2/fuhrmann/Assessment set/07250278C0001S.mrxs",
  22: "cases2/fuhrmann/Assessment set/07250286C0001S.mrxs",
  23: "cases2/fuhrmann/Assessment set/07250319C0001S.mrxs",
  24: "cases2/fuhrmann/Assessment set/07250338C0001S.mrxs",
  25: "my_slides/HE_10440017C0001S_0.tif",
  26: "my_slides/HE_10440006B0001S_0.tif",
  27: "my_slides/HE 10440011B0001S_0.tif",
  28: "my_slides/HE_10440013B0001S_4.tif",
  29: "my_slides/HE_10440015B0001S_0.tif",
  30: "my_slides/HE_10440017C0001S_0.tif",
  31: "my_slides/HE_10440019C0001S_15.tif",
  32: "my_slides/HE_10440021C0001S_0.tif",
  33: "my_slides/HE_10440023B0001S_1.tif",
  34: "my_slides/HE_10440025B0001S_0.tif",
  35: "my_slides/HE_10440028B0001S_0.tif",
  36: "my_slides/HE_10440030B0001S_0.tif",
  37: "my_slides/HE_10440038C0001S_0.tif",
  38: "my_slides/HE_10440042B0001S_0.tif",
  39: "my_slides/HE_10440044B0001S_0.tif",
  40: "my_slides/HE_10440050C0001S_0.tif",
  41: "my_slides/HE_10440052B0001S_0.tif",
  42: "my_slides/HE_10440054B0001S_0.tif",
  43: "my_slides/HE_10440060C0001S_0.tif",
  44: "my_slides/HE_10440117B0001S_3.tif",
};

// Initial declarations
var serverUrl = "https://host.pathomation.com/pma.core.2/";
var serverUsername = "PMA_UI_demo";
var serverPassword = "PMA_UI_demo";
var caller = "DemoPortal";
var slideLoaderElementSelector = "#viewer";
// var imagePath = "Reference/3DHistech/CMU-1.mrxs";
var imagePath = nameDict[18];
var context = null;
var slideLoader = null;
var annotationManager = null;
var brushSize = 1000;
var brightness = 0;
var contrast = 0;
var gamma = 0;
var red = 0;
var green = 0;
var blue = 0;
var flipHor = null;
var flipVer = null;

window.onload = function () {
  var snapdiv = document.getElementById("snapdiv");
  console.log(snapdiv);
};

function supportsColorPicker() {
  var colorInput;
  colorInput = $('<input type="color" value="!" />')[0];
  return colorInput.type === "color" && colorInput.value !== "!";
}

function drawCommands(action, type) {
  console.log(action, type);
  if (action) {
    if (action === "draw") {
      var color = $(".color-picker").val();

      var f = annotationManager.getSelection();

      if (type === "MultiPoint") {
        var mpAnnot = slideLoader.mainViewport
          .getAnnotations()
          .find(
            (x) =>
              x.metaData.Geometry.toLowerCase().indexOf(type.toLowerCase()) !==
              -1,
          );
        if (mpAnnot) {
          f = [mpAnnot];
        } else {
          f = [];
        }
      }

      annotationManager.startDrawing({
        type: type,
        color: color,
        fillColor: "rgba(0,0,0,0)",
        penWidth: Math.floor(Math.random() * 4) + 1,
        iconRelativePath: null,
        feature: type === "MultiPoint" && f.length > 0 ? f[0] : undefined,
        notes: $("#annotation-text").val() ? $("#annotation-text").val() : "",
      });
    } else if (action === "edit") {
      var f = annotationManager.getSelection();

      if (type === "Wand") {
        console.log("hi");
        annotationManager.enterEditMode({
          type: type,
          brushType: "circle",
          brushSize: brushSize,
          iconRelativePath: null,
          drawMode: true,
          feature: annotationManager.getSelection()[0],
          color: $(".color-picker").val(),
          fillColor: "rgba(33,44,55, " + Math.random() + ")",
          penWidth: Math.floor(Math.random() * 15) + 1,
          notes: $("#annotation-text").val()
            ? $("#annotation-text").val()
            : " ",
        });
      } else if (type === "Brush") {
        var f = annotationManager.getSelection();

        annotationManager.enterEditMode({
          type: type,
          brushType: "circle",
          brushSize: brushSize,
          iconRelativePath: null,
          drawMode: true,
          feature: annotationManager.getSelection()[0],
          color: $(".color-picker").val(),
          fillColor: "rgba(33,44,55, " + Math.random() + ")",
          penWidth: Math.floor(Math.random() * 15) + 1,
          notes: $("#annotation-text").val()
            ? $("#annotation-text").val()
            : " ",
        });
      } else {
        if (type === "Subtract" || type === "Addition") {
          f = null;
          annotationManager.clearSelection();
        }
        annotationManager.enterEditMode({
          type: type,
          brushType: "square",
          brushSize: brushSize,
          iconRelativePath: null,
          feature: annotationManager.getSelection()[0],
          color: $(".color-picker").val(),
          fillColor: "rgba(33,44,55, 0.6)",
          penWidth: Math.floor(Math.random() * 4) + 1,
          notes: $("#annotation-text").val() ? $("#annotation-text").val() : "",
        });
      }
    } else if (action === "measure") {
      if (type === "clear") {
        slideLoader.mainViewport.stopMeasuring();
        return;
      }

      slideLoader.mainViewport.startMeasuring(type);
    } else if (action === "save") {
      saveAnnotations();
    } else if (action === "delete") {
      var ann = annotationManager.getSelection();

      if (ann && ann.length > 0) {
        annotationManager.deleteAnnotation(ann[0].getId());
      }
    } else if (action === "deleteall") {
      var allAnnotations = slideLoader.mainViewport.getAnnotations();

      for (var i = 0; i < allAnnotations.length; i++) {
        annotationManager.deleteAnnotation(allAnnotations[i].getId());
      }
    } else if (action === "merge") {
      annotationManager.mergeSelection();
    } else if (action === "union") {
      annotationManager.booleanUnion(annotationManager.getSelection());
    } else if (action === "difference") {
      annotationManager.booleanDifference(
        annotationManager.getSelection()[0],
        annotationManager.getSelection()[1],
      );
    }
  }
}

function saveAnnotations(e) {
  if (e) {
    var metadata = e.hasOwnProperty("feature")
      ? e.feature.metaData
      : e.hasOwnProperty("length") && e.length !== 0
        ? e[0].metaData
        : null;
    if (metadata) {
      metadata.Notes = $("#annotation-text").val()
        ? $("#annotation-text").val()
        : "";
    }
  }

  $(".annotation-helper-icon").addClass("loading");
  annotationManager.saveAnnotations();
}

jQuery(function () {
  var jsColorPicker = null;
  if (supportsColorPicker()) {
    $("#color-picker-js").remove();
    $("#color-picker-hidden").remove();
  } else {
    $("#color-picker-native").remove();
    jsColorPicker = new jscolor($("#color-picker-js")[0], {
      valueElement: $("#color-picker-hidden")[0],
      hash: true,
      closable: true,
      closeText: "Close",
    });
  }

  $("button.color-btn").on("click", function (e) {
    var clr = $(this).data("color");
    $("#color-picker-native").val(clr);
    if (jsColorPicker) {
      jsColorPicker.fromString(clr);
    }
  });

  $(".color-picker").on("change", function (e) {
    var annots = annotationManager.getSelection();
    if (annots.length > 0) {
      annots.forEach((ann) => {
        var md = ann.metaData;
        md.Color = e.target.value;
        annotationManager.setMetadata(ann, md);
      });
    }
  });

  $("button[data-action][data-type], a[data-action][data-type]").on(
    "click",
    function (e) {
      var shouldReturn =
        $("button.active").data("type") === $(this).data("type");
      e.preventDefault();
      $(this).trigger("blur");
      if ($("button.active")?.data("action")?.toLowerCase() === "edit") {
        annotationManager.stopTool();
      }
      if ($("button.active")?.data("action")?.toLowerCase() === "draw") {
        annotationManager.finishDrawing(false, $("button.active").data("type"));
      }
      $("button.active").removeClass("active");
      if (shouldReturn) return;

      $("#annotation-text").val("");
      drawCommands($(this).data("action"), $(this).data("type"));

      if ($(this).data("type")) {
        $(this).addClass("active");
      }
    },
  );

  console.log(`PMA.UI version: ${PMA.UI.getVersion()}`);

  // Create a context
  context = new PMA.UI.Components.Context({ caller: caller });

  // Add an autologin authentication provider
  new PMA.UI.Authentication.AutoLogin(context, [
    {
      serverUrl: serverUrl,
      username: serverUsername,
      password: serverPassword,
    },
  ]);

  // Create an image loader that will allow us to load images easily
  slideLoader = new PMA.UI.Components.SlideLoader(context, {
    element: slideLoaderElementSelector,
    annotations: {},
    filename: false,
    rotationControl: true,
    barcode: false,
    scaleLine: true,
    theme: PMA.UI.View.Themes.Modern,
  });

  // Listen for the slide loaded event by the slide loader
  slideLoader.listen(PMA.UI.Components.Events.SlideLoaded, function (args) {
    $("button, input").removeAttr("disabled");
    $("#txt-length").attr("disabled", "");
    $("#txt-area").attr("disabled", "");
    annotationManager = new PMA.UI.Components.Annotations({
      context: context,
      element: null,
      viewport: slideLoader.mainViewport,
      serverUrl: args.serverUrl,
      path: args.path,
      enabled: true,
    });

    console.log("Slide loaded");
    console.log(args);
    $("#reset-btn").attr("disabled", false);
    $("#controls").attr("disabled", false);

    // Get initial values from viewport
    brightness = slideLoader.mainViewport.getBrightness();
    contrast = slideLoader.mainViewport.getContrast();
    gamma = slideLoader.mainViewport.getGamma();
    red = slideLoader.mainViewport.getColorBalance()[0];
    green = slideLoader.mainViewport.getColorBalance()[1];
    blue = slideLoader.mainViewport.getColorBalance()[2];
    flipHor = slideLoader.mainViewport.getFlip().horizontally;
    flipVer = slideLoader.mainViewport.getFlip().vertically;

    // Assign initial values to inputs
    $("#inputBrightness").val(brightness);
    $("#inputContrast").val(contrast);
    $("#inputGamma").val(gamma);
    $("#inputColorBalanceR").val(red);
    $("#inputColorBalanceG").val(green);
    $("#inputColorBalanceB").val(blue);
    $("#inputFlipHor").prop("checked", flipHor);
    $("#inputflipVer").prop("checked", flipVer);
    $("#inputBrightness-label").text(brightness);
    $("#inputContrast-label").text(contrast);
    $("#inputGamma-label").text(gamma);
    $("#inputColorBalanceR-label").text(red);
    $("#inputColorBalanceG-label").text(green);
    $("#inputColorBalanceB-label").text(blue);

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationsSelectionChanged,
      function (e) {
        if (e) {
          $("button[data-action='delete']").attr("disabled", false);
          var metadata = e.feature
            ? e.feature.metaData
            : e.hasOwnProperty("length") && e.length !== 0
              ? e[0].metaData
              : null;
          if (metadata) {
            console.log("selection: ", metadata);
            $("#annotation-text").val(metadata.Notes);
            $("#classification-text").val(metadata.Classification);
            $("#txt-area").val(metadata.FormattedArea || " - ");
            $("#txt-length").val(metadata.FormattedLength || " - ");
          } else {
            $("button[data-action='delete']").attr("disabled", true);
            $("#annotation-text").val("");
            $("#classification-text").val("");
            $("#txt-area").val(" - ");
            $("#txt-length").val(" - ");
          }
        }
      },
    );

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationsSaved,
      function (e) {
        if (e && e.success) {
          $(".annotation-helper-icon").removeClass("loading").addClass("saved");
        } else {
          $(".annotation-helper-icon").removeClass("loading").addClass("error");
        }

        $("button[data-action=save][data-type]").removeClass("active");

        setTimeout(function () {
          $(".annotation-helper-icon").removeClass("loading error saved");
        }, 1000);
      },
    );

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationAdded,
      function (e) {
        console.log("Annotation added", e.feature);
        $("button.active").removeClass("active");
        annotationManager.fireEvent(
          PMA.UI.Components.Events.AnnotationsSelectionChanged,
          { feature: e.feature },
        );
        setTimeout(
          () => annotationManager.selectAnnotation(e.feature.getId()),
          150,
        );
      },
    );

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationDrawing,
      function (e) {
        // Event called while drawing annotations
      },
    );

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationDeleted,
      function (e) {
        console.log("Annotation deleted", e.feature);
        $("button[data-action='delete']").attr("disabled", true);
        $("#annotation-text").val("");
        $("#classification-text").val("");
        $("#txt-area").val(" - ");
        $("#txt-length").val(" - ");
      },
    );

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationModified,
      function (e) {
        console.log("Annotation modified", e.feature);
        $("button.active").removeClass("active");
      },
    );

    annotationManager.listen(
      PMA.UI.Components.Events.AnnotationEditingEnded,
      function (e) {
        console.log("Annotation editing ended", e.feature);
        $("button.active").removeClass("active");
        if (e.feature) {
          annotationManager.fireEvent(
            PMA.UI.Components.Events.AnnotationsSelectionChanged,
            { feature: e.feature },
          );
          setTimeout(
            () => annotationManager.selectAnnotation(e.feature.getId()),
            150,
          );
        }
      },
    );
  });

  // Load the image with the context
  slideLoader.load(serverUrl, imagePath);

  $("#annotation-text").on("keydown focusout", function (event) {
    if (event.type === "keydown" && event.key !== "Enter") {
      return;
    }
    if (annotationManager && annotationManager.getSelection().length !== 0) {
      var sel = annotationManager.getSelection()[0];
      if (sel.metaData) {
        sel.metaData.Notes = $(this).val() ? $(this).val() : "";
        annotationManager.setMetadata(sel, sel.metaData);
      }
    }
  });

  $("#classification-text").on("keydown focusout", function (event) {
    if (event.type === "keydown" && event.key !== "Enter") {
      return;
    }
    if (annotationManager && annotationManager.getSelection().length !== 0) {
      var sel = annotationManager.getSelection()[0];
      if (sel.metaData) {
        sel.metaData.Classification = $(this).val() ? $(this).val() : "";
        annotationManager.setMetadata(sel, sel.metaData);
      }
    }
  });

  $("body").on("keydown", function (event) {
    if (
      !$(event.target).is("input") &&
      (event.key === "Delete" || event.key === "Del")
    ) {
      drawCommands("delete", null);
    }
  });

  $("#chkLabels").on("change", function () {
    var selectedAnnotations = annotationManager
      .getSelection()
      .map((ann) => ann);
    annotationManager.clearSelection();
    var labels = $("#chkLabels").prop("checked");
    var measurements = $("#chkMeasurements").prop("checked");
    console.log(`Show labels: ${labels} - Show measurements: ${measurements}`);
    slideLoader.mainViewport.showAnnotationsLabels(labels, measurements);
    selectedAnnotations.forEach((ann) => {
      var feats = annotationManager.selectInteraction.getFeatures();
      feats.push(ann);
    });
  });

  $("#chkMeasurements").on("change", function () {
    var selectedAnnotations = annotationManager
      .getSelection()
      .map((ann) => ann);
    annotationManager.clearSelection();
    var labels = $("#chkLabels").prop("checked");
    var measurements = $("#chkMeasurements").prop("checked");
    console.log(`Show labels: ${labels} - Show measurements: ${measurements}`);
    slideLoader.mainViewport.showAnnotationsLabels(labels, measurements);
    selectedAnnotations.forEach((ann) => {
      var feats = annotationManager.selectInteraction.getFeatures();
      feats.push(ann);
    });
  });

  $("#snapshot-btn").on("click", function () {
    var format = $("#inputFormat").val();
    var title = $("#inputTitle").val();
    var titleLocation = $("#inputTitleLocation").val();
    var titleFont = $("#inputTitleFont").val();
    var titleFontColor = $("#inputTitleFontColor").val();
    var showScalebar = $("#inputScalebar").val() === "true";
    var scalebarLocation = $("#inputScalebarLocation").val();
    var scalebarFont = $("#inputScalebarFont").val();
    var scalebarFontColor = $("#inputScalebarFontColor").val();
    var showBarcode = $("#inputBarcode").val() === "true";
    var showOverview = $("#inputOverview").val() === "true";
    var dpi = parseInt($("#inputDPI").val()) || "";
    var filename = $("#inputFilename").val();
    var action = $("#inputAction").val();

    var snapshotOptions = Object.assign(
      {},
      title && { title: title },
      titleLocation && { titleLocation: titleLocation },
      titleFont && { titleFont: titleFont },
      titleFontColor && { titleFontColor: titleFontColor },
      showScalebar !== true && { scalebar: showScalebar },
      scalebarLocation && { scalebarLocation: scalebarLocation },
      scalebarFont && { scalebarFont: scalebarFont },
      scalebarFontColor && { scalebarFontColor: scalebarFontColor },
      showBarcode && { barcode: showBarcode },
      showOverview && { overview: showOverview },
      dpi && { dpi: dpi },
      filename && { filename: filename },
      action && { action: action },
    );

    console.log("Snapshot requested as " + format, snapshotOptions);

    // Get snapshot with parameters
    slideLoader.mainViewport
      .getSnapshot(format, snapshotOptions)
      .then(function (data) {
        console.log(data);
      });
  });

  $("#inputBrightness").on("input", function (e) {
    $("#inputBrightness-label").text(e.target.value);
  });

  $("#inputBrightness").on("change", function (e) {
    // Assign input's value to brightness
    slideLoader.mainViewport.setBrightness(parseInt(e.target.value));
    $("#inputBrightness-label").text(e.target.value);
    console.log(`Brightness: ${e.target.value}`);
  });

  $("#inputContrast").on("input", function (e) {
    $("#inputContrast-label").text(e.target.value);
  });

  $("#inputContrast").on("change", function (e) {
    // Assign input's value to contrast
    slideLoader.mainViewport.setContrast(parseFloat(e.target.value));
    $("#inputContrast-label").text(e.target.value);
    console.log(`Contrast: ${e.target.value}`);
  });

  $("#inputGamma").on("input", function (e) {
    $("#inputGamma-label").text(e.target.value);
  });

  $("#inputGamma").on("change", function (e) {
    // Assign input's value to gamma
    slideLoader.mainViewport.setGamma(parseFloat(e.target.value));
    $("#inputGamma-label").text(e.target.value);
    console.log(`Gamma: ${e.target.value}`);
  });

  $("#inputColorBalanceR").on("input", function (e) {
    $("#inputColorBalanceR-label").text(e.target.value);
  });

  $("#inputColorBalanceR").on("change", function (e) {
    // Assign input's value to red
    var r = parseFloat($("#inputColorBalanceR").val());
    var g = parseFloat($("#inputColorBalanceG").val());
    var b = parseFloat($("#inputColorBalanceB").val());
    slideLoader.mainViewport.setColorBalance(r, g, b);
    $("#inputColorBalanceR-label").text(e.target.value);
    console.log(`Color Balance Red: ${e.target.value}`);
  });

  $("#inputColorBalanceG").on("input", function (e) {
    $("#inputColorBalanceG-label").text(e.target.value);
  });

  $("#inputColorBalanceG").on("change", function (e) {
    // Assign input's value to green
    var r = parseFloat($("#inputColorBalanceR").val());
    var g = parseFloat($("#inputColorBalanceG").val());
    var b = parseFloat($("#inputColorBalanceB").val());
    slideLoader.mainViewport.setColorBalance(r, g, b);
    $("#inputColorBalanceG-label").text(e.target.value);
    console.log(`Color Balance Green: ${e.target.value}`);
  });

  $("#inputColorBalanceB").on("input", function (e) {
    $("#inputColorBalanceB-label").text(e.target.value);
  });

  $("#inputColorBalanceB").on("change", function (e) {
    // Assign input's value to blue
    var r = parseFloat($("#inputColorBalanceR").val());
    var g = parseFloat($("#inputColorBalanceG").val());
    var b = parseFloat($("#inputColorBalanceB").val());
    slideLoader.mainViewport.setColorBalance(r, g, b);
    $("#inputColorBalanceB-label").text(e.target.value);
    console.log(`Color Balance Blue: ${e.target.value}`);
  });

  $("#inputFlipHor").on("change", function () {
    // Flip horizontally
    slideLoader.mainViewport.setFlip(
      $("#inputFlipHor").is(":checked"),
      $("#inputFlipVer").is(":checked"),
    );
    console.log("Flip horizontally");
  });

  $("#inputFlipVer").on("change", function () {
    // Flip vertically
    slideLoader.mainViewport.setFlip(
      $("#inputFlipHor").is(":checked"),
      $("#inputFlipVer").is(":checked"),
    );
    console.log("Flip vertically");
  });

  $("#reset-btn").on("click", function () {
    // Assign initial values to inputs
    $("#inputBrightness").val(brightness);
    $("#inputContrast").val(contrast);
    $("#inputGamma").val(gamma);
    $("#inputColorBalanceR").val(red);
    $("#inputColorBalanceG").val(green);
    $("#inputColorBalanceB").val(blue);
    $("#inputFlipHor").prop("checked", flipHor);
    $("#inputFlipVer").prop("checked", flipVer);
    $("#inputBrightness-label").text(brightness);
    $("#inputContrast-label").text(contrast);
    $("#inputGamma-label").text(gamma);
    $("#inputColorBalanceR-label").text(red);
    $("#inputColorBalanceG-label").text(green);
    $("#inputColorBalanceB-label").text(blue);

    // Assign initial values to viewport
    slideLoader.mainViewport.setBrightness(brightness);
    slideLoader.mainViewport.setContrast(contrast);
    slideLoader.mainViewport.setGamma(gamma);
    slideLoader.mainViewport.setColorBalance(red, green, blue);
    slideLoader.mainViewport.setFlip(flipHor, flipVer);

    console.log("Values reverted to initial");
  });

  setInterval(function () {
    if (!annotationManager) return;
    let anns = annotationManager.getSelection();
    if (anns.length === 1) {
      $("#annotation-text-div").css("display", "block");
      $("#classification-text-div").css("display", "block");
      if ($("#txt-length").val() !== " - ") {
        $("#txt-length-div").css("display", "block");
      } else {
        $("#txt-length-div").css("display", "none");
      }
      if ($("#txt-area").val() !== " - ") {
        $("#txt-area-div").css("display", "block");
      } else {
        $("#txt-area-div").css("display", "none");
      }
    } else {
      $("#annotation-text-div").css("display", "none");
      $("#classification-text-div").css("display", "none");
      $("#txt-length-div").css("display", "none");
      $("#txt-area-div").css("display", "none");
    }

    // if (anns.length === 1 && anns[0].metaData.Geometry.startsWith("POLYGON")) {
    //     $('button[data-type="Subtract"]').removeAttr("disabled");
    // } else {
    //     $('button[data-type="Subtract"]').attr("disabled", "");
    // }

    if (
      anns.length > 1 &&
      anns.every((x) => x.metaData.Geometry.startsWith("POLYGON"))
    ) {
      $('button[data-action="union"]').removeAttr("disabled");
      if (anns.length === 2) {
        $('button[data-action="difference"]').removeAttr("disabled");
      } else {
        $('button[data-action="difference"]').attr("disabled", "");
      }
    } else {
      $('button[data-action="union"]').attr("disabled", "");
      $('button[data-action="difference"]').attr("disabled", "");
    }

    if (
      $("button.active")?.data("action")?.toLowerCase() === "draw" &&
      annotationManager.snapInteraction.getActive()
    ) {
      annotationManager.snapInteraction.setActive(false);
    }

    if ($(annotationManager.cancelDrawingButton).hasClass("bound")) return;
    $(annotationManager.cancelDrawingButton).addClass("bound");
    $(annotationManager.cancelDrawingButton).on("click", function (e) {
      $("button.active").removeClass("active");
    });
  }, 100);
});
