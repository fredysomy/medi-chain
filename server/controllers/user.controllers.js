exports.getSelf = async (req, res) => {
    const { password,seckey, ...rest } = req.user.user;
    res.json(rest);
}