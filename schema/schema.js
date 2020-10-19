const graphql = require('graphql');
const { post } = require('../routes/router');
const _= require('lodash');


//dummy data
let posts = [
    {name:"Загвоздка", type:"Скетч", id:"1"},
    {name:"Бич Божий", type:"Скетч", id:"2"},
    {name:"Holy Water", type:"Трек", id:"3"},
    {name:"Сволочь", type:"Перформанс", id:"4"},
    {name:"Тестинг", type:"Тикток", id:"5"},
]
const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        type: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        post:{
            type: PostType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){

           return _.find(posts, {id: args.id});
            
        }
        }
    }
    })



    module.exports = new graphql.GraphQLSchema({
        query: RootQuery
    });