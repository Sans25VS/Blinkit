import fastify from "fastify";
const start = async () => {
    const app = fastify();
    const PORT = process.env.PORT || 3000;

    app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`blinkit server listening on ${addr}`);
        }
    });
};

start();
