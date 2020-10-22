const graphql = require('graphql');
const { post } = require('../routes/router');
const _= require('lodash');
const Post = require('../DB/models/post');
const Artist = require('../DB/models/artist')



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
                //return _.find(artists, {id: parent.artistid})
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
               // return _.filter(posts, {artistid: parent.id});
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

          // return _.find(posts, {id: args.id});
            
        }
        },
        artist:{
            type: ArtistType,
            args: {id:{type:GraphQLID}},

            resolve(parent, args){
               // return _.find(artists, {id: args.id});
            }
            },
            posts: {
                type: new GraphQLList(PostType),
                resolve(parent, args){
                  //  return posts
                }
            },
            artists: {
                type: new GraphQLList(ArtistType),
                
                resolve(parent, args){
                  //  return artists
                }
            }

    }
    })

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addArtist:{
            type: ArtistType,
            args: {
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
        resolve(parent, args){
            let artist = new Artist({
                name: args.name,
                age: args.age
            });
            artist.save()
        }
        }
    }
})

    module.exports = new graphql.GraphQLSchema({
        query: RootQuery,
        mutation: Mutation
    });