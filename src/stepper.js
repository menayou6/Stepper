/**
 * Stepper 0.0.1
 * Make a professional steps form/view with the simplest jQuery plugin ever!
 * https://github.com/menayou6/Stepper
 *
 * Copyright 2018 Mina R. Youssef
 *
 * Released under the MIT License
 *
 * Released on: July 2, 2018
 */


(function ( $ ) {
 
    $.fn.stepper = function( options ) {
        var stepContainer = this;

        var settings = $.extend({
            // These are the defaults.
            currentStep: 0,
            singleStepContent: '.step-content',
            navStepBtn: '.next-back-btn',
            stepsCounter: '.step-number',
            onStepChange: function(currentStep, nextStep, nextBtn, backBtn, clickedEl){},
            onStepChangeEnd: function(currentStep){},
        }, options );

        $(stepContainer).find(settings.singleStepContent).each(function(index, element){
            $(this).attr('data-step', index);

            if (settings.currentStep != index) {
                $(this).hide();
            }
        });
        

        $(stepContainer).find(settings.navStepBtn).unbind().click(function(event) {
            var thisEl = this;
            var nextStepNumber = $(this).hasClass('next') ? settings.currentStep + 1 : settings.currentStep - 1;

            settings.onStepChange(settings.currentStep, nextStepNumber, settings.navStepBtn+'.next', settings.navStepBtn+'.back', thisEl);

            //Step Navigation
            $(stepContainer).find(settings.singleStepContent).hide();
            $(stepContainer).find(settings.singleStepContent + '[data-step=' + nextStepNumber + ']').show();
            $(stepContainer).find(settings.stepsCounter).text(nextStepNumber+1);



            settings.currentStep = nextStepNumber;
            settings.onStepChangeEnd(settings.currentStep,settings.navStepBtn+'.next', settings.navStepBtn+'.back');

        });

    };
 
}( jQuery ));