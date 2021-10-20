$(() => {
    const success = (res) => {
        $("#msg").text("Quantity: " + res.quantity);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
    }
    $(".classadd").click(function(e) {
        let value = e.target.id

        const data = {
            id: value,
        };

        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        })
            .done(success)
            .fail(noSuccess);
        return false;
    });
});