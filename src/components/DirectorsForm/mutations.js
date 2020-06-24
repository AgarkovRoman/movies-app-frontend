import { gql } from 'apollo-boost';

export const addDirectorMutation = gql`
mutation addDirector($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
        name
        id
    }
}
`;

export const updateDirectorMutation = gql`
mutation updateDirector($name: String!, $age: Int!, $id: ID!) {
    updateDirector(name: $name, age: $age, id: $id) {
        name
        id
    }
}
`;