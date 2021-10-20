$(() => {
    const success = (res) => {
        $("#msg").text(res);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        $.get({
            url: "/8ball",
            contentType: "application/json; charset=utf-8"
        })
            .done(success)
            .fail(noSuccess);
        return false;
    });
});