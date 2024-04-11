const usuarios = [];
const tweets = [];

const signUp = (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
        return res.status(400).json({ message: 'Dados incompletos.' });
    }

    usuarios.push({ username, avatar });
    return res.status(200).json({ message: 'OK' });
}

const criarTweet = (req, res) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        return res.status(400).json({ message: 'Dados incompletos.' });
    }

    const { avatar } = usuarios.find(u => u.username === username);

    tweets.push({ username, tweet, avatar });
    return res.status(200).json({ message: 'OK' });
}

const listarTweet = (req, res) => {
    return res.status(200).send(tweets);
}


module.exports = { signUp, criarTweet, listarTweet }