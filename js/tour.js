/**
 * Created by aishwaryababu on 2/29/16.
 */

(function() {
    // Instance the tour
    var tour = new Tour();

    tour.addSteps([
        {
            element: "#element1",
            title: "Step1",
            content: "Content of my step1"
        },
        {
            element: "#element2",
            title: "Step2",
            content: "Content of my step2"
        }
    ]);

// Initialize the tour
    tour.init();

    $('#tour').click(function(e){
        tour.start(true);
        e.preventDefault();
    });
}());
