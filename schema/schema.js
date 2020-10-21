const graphql = require('graphql');
const { post } = require('../routes/router');
const _= require('lodash');


//dummy data
let posts = [
    {name:"Загвоздка", type:"Скетч", id:"1", artistid: "3"},
    {name:"Бич Божий", type:"Скетч", id:"2", artistid: "1"},
    {name:"Holy Water", type:"Трек", id:"3", artistid: "2"},
    {name:"Сволочь", type:"Перформанс", id:"4", artistid: "2"},
    {name:"Тестинг", type:"Тикток", id:"5", artistid: "1"},
]
let artists = [
    {name:"Bepely", age:"22", id:"1"},
    {name:"Sema", age:"26", id:"2"},
    {name:"Petr", age:"23", id:"3"}
]
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        artist: {
            type: ArtistType,
            resolve(parent, args){
                return _.find(artists, {id: parent.artistid})
            }
        }
    })
});

const ArtistType = new GraphQLObjectType({
    name: 'Artist',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return _.filter(posts, {artistid: parent.id});
            }
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        post:{
            type: PostType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){

           return _.find(posts, {id: args.id});
            
        }
        },
        artist:{
            type: ArtistType,
            args: {id:{type:GraphQLID}},

            resolve(parent, args){
                return _.find(artists, {id: args.id});
            }
            },
            posts: {
                type: new GraphQLList(PostType),
                resolve(parent, args){
                    return posts
                }
            },
            artists: {
                type: new GraphQLList(ArtistType),
                
                resolve(parent, args){
                    return artists
                }
            }

    }
    })



    module.exports = new graphql.GraphQLSchema({
        query: RootQuery
    });