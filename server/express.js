import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import Template from './../template';
import devBundle from './devBundle';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

// modules for server side rendering
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import MainRouter from '../client/MainRouter';

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider'
import {  createGenerateClassName, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';
import Menu from '@material-ui/core/Menu/Menu';

const CURRENT_WORKING_DIR = process.cwd()
const app = express();

devBundle.compile(app);

/* configure express */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.use('/', userRoutes);
app.use('/', authRoutes);

app.get('*', (req, res) => {
    console.log('aaaaa');
    const sheetRegistry = new SheetsRegistry();
    console.log('sheetRegistry', sheetRegistry);
    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#757de8',
                main: '#3f51b5',
                dark: '#002984',
                contrastText: '#fff'
            },
            secondary: {
                light: '#ff79b0',
                main: '#ff4081',
                dark: '#c60055',
                contrastText: '#000',
            },
            openTitle: indigo['400'],
            protectedTitle: pink['400'],
            type: 'light',
            typography: {
                useNextVariants: true,
            },
        }
    });
    
    const generateClassName = createGenerateClassName();
    const context = {};
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <JssProvider registry={sheetRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                    <div>Please waitting a minutes</div>                 
                </MuiThemeProvider>
            </JssProvider>
        </StaticRouter>
    );

    if (context.url) {
        return res.redirect(303, context.url);
    }

    const css = sheetRegistry.toString();
    res.status(200).send(Template({
        markup: markup,
        css: css
    }));
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message});
    }
})

export default app;