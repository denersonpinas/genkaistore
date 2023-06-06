import axios from "axios"
import { parseCookies } from "nookies"
import * as next from 'next';
import * as cookie from 'cookie';
import * as express from 'express';

export function getAPIClient(ctx?: Pick<next.NextPageContext, 'req'> | {
    req: next.NextApiRequest;
} | {
    req: express.Request;
} | null | undefined, options?: cookie.CookieParseOptions) {
    const { 'genkaistore.token': token } = parseCookies()

    const api = axios.create({
        // baseURL: 'http://localhost:8022'
        baseURL: 'http://servinn.dyndns.org:8022'
    })
    
    return api
}