var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index/index');
var pricingEntradaRouter = require('./routes/index/pricingEntrada');
var pricingSaidaRouter = require('./routes/index/pricingSaida');
var pricingCaixaRouter = require('./routes/index/pricingCaixa');
var numbersRegistersRouter = require('./routes/index/numbersRegister');
var profileRouter = require('./routes/profile/perfil');
var loginRouter = require('./routes/login/login');
var entradasRouter = require('./routes/modal/entradas');
var saidasRouter = require('./routes/modal/saidas');
var authCadastroRouter = require('./routes/adm/cadastro/cadastro');
var cadastroUserRouter = require('./routes/adm/cadastro/cadastroForm');
var pegarUsuariosCadastradosRouter = require('./routes/adm/cadastro/getUserPerm'); 
var registrosRouter = require('./routes/tables/registrosAll');
var registrosEntradaRouter = require('./routes/tables/registrosAllEntrada');
var registrosSaidaRouter = require('./routes/tables/registrosAllSaida');
var registrosEditRouter = require('./routes/edit/registrosEdit');
var criarCardBancoRouter =  require('./routes/create/createCard');
var deletarCardBancoRouter =  require('./routes/create/deleteCard');
var criarCardFornRouter = require('./routes/create/createForn');
var deletarCardFornRouter = require('./routes/create/deleteForn');
var pegarCardsBankRouter = require('./routes/billing/billingCardsBank');
var pegarCardsFornRouter = require('./routes/billing/billingCardsForn');
var pegarCardsFiscalNote = require('./routes/billing/billingFiscalNote');
var pegarSeisPrimeirosRouter = require('./routes/tables/registrosSix'); 
var pegarSeisPrimeirasNotasRouter = require('./routes/tables/registrosNoteSix');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Login
app.use('/api/login', loginRouter);
// Index
app.use('/', indexRouter);
// Entrada
app.use('/api/registros/get/entrada', registrosEntradaRouter);
app.use('/api/registros/entradas', entradasRouter);
app.use('/api/preco/entrada/get/', pricingEntradaRouter);
// Saída
app.use('/api/registros/get/saida', registrosSaidaRouter);
app.use('/api/registros/saidas', saidasRouter);
app.use('/api/preco/saida/get/', pricingSaidaRouter);
// Registros
app.use('/api/registros/get/', registrosRouter);
app.use('/api/registros/numeros/get/', numbersRegistersRouter);
app.use('/api/preco/caixa/get/', pricingCaixaRouter);
app.use('/api/registros', registrosEditRouter);
app.use('/api/registros/seisprimeiros/get/', pegarSeisPrimeirosRouter);
app.use('/api/registros/seisnotas/get/', pegarSeisPrimeirasNotasRouter);
// Billing
app.use('/api/cartoes/get/', pegarCardsBankRouter);
app.use('/api/cartoes/', criarCardBancoRouter);
app.use('/api/cartoes/delete/', deletarCardBancoRouter);
app.use('/api/forn/', criarCardFornRouter);
app.use('/api/forn/delete/', deletarCardFornRouter);
app.use('/api/notef/get/', pegarCardsFiscalNote);
app.use('/api/forn/get/', pegarCardsFornRouter);
// Profile
app.use('/api/perfil/', profileRouter);
// Cadastro User
app.use('/api/adm/cadastro/user/', cadastroUserRouter);
app.use('/api/adm/users/get', pegarUsuariosCadastradosRouter);
// ADM Auth
app.use('/api/adm/cadastro/auth/', authCadastroRouter);


app.use(session({
    secret: 'planbase-secret-key',
    resave: false,
    saveUninitialized: true,
}));
  

module.exports = app;
