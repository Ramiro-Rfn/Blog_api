import express from 'express';

import connections from '../database/connections.js';

const connection = connections()

class ArticleController{
    index = async(req, res)=>{
        await connection.query(`USE noticiasblog`);

        await connection.query(`
            SELECT * FROM noticias
        `, (error, result, fields)=>{
            console.log(result);
            console.log(fields);
            if(error) throw error;

            res.json(result);
        })
    }

    create = async (req, res)=>{
        const {
            id,
            title,
            body
        } = req.body;
    
        console.log(req.body)
        await connection.query(`USE noticiasblog`);
    
        await connection.query(`
            INSERT INTO noticias(
                id,
                title,
                body,
                posted
            )VALUES(
                default, '${title}', '${body}', default  
            )
        `,(error, result, fields)=>{
            if(error) throw error
    
            console.log('Dados cadastrados com sucesso: '+ result);
            console.log(fields);
            res.send().status()
        })
    };

    remove = async (req, res)=>{
        const {id} = req.query;

        await connection.query(`
            DELETE FROM noticias WHERE id = ${id}
        `,(err)=>{
            if(err){
                console.log(err)
            }
    
            res.send().status();
        })
    }

}

export default ArticleController;