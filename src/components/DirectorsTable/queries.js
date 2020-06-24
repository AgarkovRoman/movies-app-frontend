import { gql } from 'apollo-boost';

export const directorsQuery = gql`
    query DirectorsQuery($name: String){
        directors (name: $name){
            id
            name
            age
            movies {
                name
            }
        }
    }
`;