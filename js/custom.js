$(document).ready(function () {

    $(".permanent_type").click(function () {
        $(".stop_forwarding_date").addClass('d-none');
    });
    $(".temporary_type").click(function () {
        $(".stop_forwarding_date").removeClass('d-none');
    });



    $(".individual_type").click(function () {
        $(".business_col").addClass('d-none');
    });

    $(".family_type").click(function () {
        $(".business_col").addClass('d-none');
    });
    $(".business_type").click(function () {
        $(".business_col").removeClass('d-none');
    });



    $(".help_p").click(function () {
        $(".popup_permanent").removeClass('d-none');
    });
    $(".p_guide_btn").click(function () {
        $(".popup_permanent").addClass('d-none');
    });

    $(".help_t").click(function () {
        $(".popup_temporary").removeClass('d-none');
    });
    $(".t_guide_btn").click(function () {
        $(".popup_temporary").addClass('d-none');
    });


    $(".help_psn").click(function () {
        $(".popup_personal").removeClass('d-none');
    });
    $(".psnl_guide_btn").click(function () {
        $(".popup_personal").addClass('d-none');
    });


    $(".help_ind").click(function () {
        $(".popup_individual").removeClass('d-none');
    });
    $(".ind_guide_btn").click(function () {
        $(".popup_individual").addClass('d-none');
    });


    $(".help_fml").click(function () {
        $(".popup_family").removeClass('d-none');
    });
    $(".fml_guide_btn").click(function () {
        $(".popup_family").addClass('d-none');
    });


    $(".help_bus").click(function () {
        $(".popup_business").removeClass('d-none');
    });
    $(".bus_guide_btn").click(function () {
        $(".popup_business").addClass('d-none');
    });

    var example = flatpickr('#start-forwarding-date');
    var example = flatpickr('#stop-forwarding-date');

    flatpickr('#start-forwarding-date', {
        dateFormat: 'm-d-y',
        allowInput: false,

    });
    flatpickr('#stop-forwarding-date', {
        dateFormat: 'm-d-y',
        allowInput: false,

    });

});