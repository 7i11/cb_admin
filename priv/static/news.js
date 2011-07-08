var watch_id;
function listen_for_events(timestamp) {
    $.ajax("/admin/events/"+timestamp, { success: function(data, code, xhr) {
        if (data.messages) {
            for (var i=0; i<data.messages.length; i++) {
                var message = data.messages[i];
                if (message.ev == "updated") {
                    var show_val = message.data.val;
                    var elem_id = message.data.id+"-"+message.data.attr;
                    var truncatewords = 8;
                    if ($("table #"+elem_id).length > 0 
                        && message.data.val.split(' ').length > truncatewords) {
                        show_val = message.data.val.split(' ').slice(0, truncatewords).join(' ') + "...";
                    }
                    $("#"+elem_id).html(show_val);
                }
            }
        }
        if (data.timestamp) {
            listen_for_events(data.timestamp);
        }
    },
    timeout: 60 * 1000
    });
}
function heartbeat_loop() {
    $.ajax("/admin/heartbeat/"+watch_id, { type: "POST" });
    setTimeout(heartbeat_loop, 30 * 1000);
}

function watch_topic(topic, timestamp) {
    $.ajax("/admin/watch", { 
        type: "POST",
        data: { topic_string: topic },
        success: function(data, code, xhr) {
            if (data.watch_id != undefined) {
                watch_id = data.watch_id;
                listen_for_events(timestamp);
                setTimeout(heartbeat_loop, 30 * 1000);
            }
        }
    });
}
