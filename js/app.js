// call for new layer
$("#new-layer").click(function() {
    ctr++;
    $("#canvas-layer-control").append(
        "<div class='layer' data-layer='" + ctr + "'><img src='assets/layer.png' alt='Layer icon' style='vertical-align: middle;' width='40px' /><span style='vertical-align: middle;'>Layer " + ctr + "</span><img src='assets/x-mark.png' alt='Layer plus icon' style='float: right; margin-top: 19px; margin-right: 10px;' width='10px' /><hr /></div>"
    );
});