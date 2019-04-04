var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        var num = index
        setTimeout (
            () => container.textContent += message [ num ],
            1000 * velocity * num
        )
        index++ < message.length - 1 ? arguments.callee ( message ) : null
    }
})( 1 )

typeMessage ( `Welcome to the hell` )