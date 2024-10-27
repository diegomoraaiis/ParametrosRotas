import Express from 'express';

const app = Express();
var carros = ['fiesta', 'saveiro', 'corolla'];

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))


//ATIVIDADE 1
app.get('/link1/', (req, res) => {

    res.send(`<p><a href="/link2/">Clique aqui para ir para /link2</a></p>`)
})

app.get('/link2/', (req, res) => {

    res.send(`<p><a href="/link1/">Clique aqui para ir para /link1</a></p>`)
})

//ATIVIDADE 2
app.get('/reverse/:str', (req, res) => {

    res.send(req.params.str.split('').reverse().join(''))
})

//ATIVIDADE 3
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.status(400).json({ mensagem: 'favor preencher os dados.' });
    }

    if (senha === usuario + usuario) {
        return res.status(200).json({ mensagem: 'Acesso OK.' });
    } else {
        return res.status(403).json({ mensagem: 'Acesso negado.' });
    }
});



app.post('/cars/', (resq, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[carros.length - 1]]);
})

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
})

app.get('/', (req, res) =>
    res.send("<h3>Rotas no express </h3> <p> Rota'/'")
)

app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no express </h3> <p>Vamos aprender a utilizar rotas com express")
)

app.get('/users/:name', (req, res) =>
    res.send('Usuário:' + req.params.name)
)


app.listen(3000, () =>
    console.log('servidor iniciado na porta 3000')

)
