$(document).ready(function () {
    var viewModel = function() {
        var self = this;

        self.events = ko.observableArray([]);
        self.title = ko.observable("Event Tracker : CSCI Tech Exercise");

        self.addEvent = () => {
            var event_name = $('#eventName').val();
            var event_address = $('#eventAddress').val();
            var event_date = $('#eventDate').val();

            var eventObject = {
                name: event_name,
                address: event_address,
                date: event_date
            };

            $('#newEventModal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            $('#eventName').val('');
            $('#eventAddress').val('');
            $('#eventDate').val('');

            console.log(eventObject);

            $.post('./server.php', eventObject, (postResponse) => {
                location.reload();
            });
        };

        $.get('./server.php', null, (eventsResponse) => {
            console.log(JSON.parse(eventsResponse));
            self.events(JSON.parse(eventsResponse));
        });
    }

    ko.applyBindings(viewModel);
});