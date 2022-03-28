module.exports = (server) =>{
    const io = require('socket.io')(server, {
        cors: {
        // origin: "https://hasan-mern-chat.herokuapp.com",
        origin: "/",
        methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket)=>{
        console.log("Connected: " + socket.id)
        socket.on('disconnect', ()=>{
            console.log("Disconnect: " + socket.id)
        })

        socket.on("startShare", (roomId)=>{
            socket.join(roomId);
        });

        socket.on('screen_data', (data)=>{
            console.log(data);
        })
    })
}