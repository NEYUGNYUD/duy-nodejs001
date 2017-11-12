var route = async function route(p, addr) {
    await p.goto(addr);
};
module.exports.route = route;