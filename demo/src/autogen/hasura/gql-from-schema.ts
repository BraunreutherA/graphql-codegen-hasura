/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';

    // observation GQL
    //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const ObservationModelFields = gql`
      fragment ObservationModelFields on observation {
      id
      resource
      }
    `;


    // Mutation: Insert
    //

    const INSERT_OBSERVATION_MODEL = gql`
      mutation insertObservationModel($objects: [observation_insert_input!]!, $onConflict: observation_on_conflict) {
        insert_observation(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFields}
    `;


    // Query: FetchById
    //

    const FETCH_OBSERVATION_MODEL_BYID = gql`
      query fetchObservationModelById($observationId: uuid!) {
        observation_by_pk(id: $observationId) {
          ...ObservationModelFields
        }
      }
      ${ObservationModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_OBSERVATION_MODELS = gql`
      query fetchObservationModel(
        $distinct_on: [observation_select_column!]
        $where: observation_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [observation_order_by!]
      ) {
        observation(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...ObservationModelFields
        }
      }
      ${ObservationModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_OBSERVATION_MODEL_BYID = gql`
      mutation updateObservationModelById($id: uuid, $set: observation_set_input) {
        update_observation(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_OBSERVATION_MODELS = gql`
      mutation updateObservationModel($set: observation_set_input, $where:observation_bool_exp!) {
        update_observation(_set: $set, where: $where) {
          affected_rows
          returning {
            ...ObservationModelFields
          }
        }
      }
      ${ObservationModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_OBSERVATION_MODEL_BYID = gql`
      mutation removeObservationModelById($id: uuid) {
        delete_observation(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${ObservationModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_OBSERVATION_MODELS = gql`
      mutation removeObservationModel($where:observation_bool_exp!) {
        delete_observation(where: $where) {
          affected_rows
        }
      }
      ${ObservationModelFields}
    `;

    // p GQL
    //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const PModelFields = gql`
      fragment PModelFields on p {
      circle
      id
      poly
      }
    `;


    // Mutation: Insert
    //

    const INSERT_P_MODEL = gql`
      mutation insertPModel($objects: [p_insert_input!]!, $onConflict: p_on_conflict) {
        insert_p(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFields}
    `;


    // Query: FetchById
    //

    const FETCH_P_MODEL_BYID = gql`
      query fetchPModelById($pId: Int!) {
        p_by_pk(id: $pId) {
          ...PModelFields
        }
      }
      ${PModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_P_MODELS = gql`
      query fetchPModel(
        $distinct_on: [p_select_column!]
        $where: p_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [p_order_by!]
      ) {
        p(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...PModelFields
        }
      }
      ${PModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_P_MODEL_BYID = gql`
      mutation updatePModelById($id: Int, $set: p_set_input) {
        update_p(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_P_MODELS = gql`
      mutation updatePModel($set: p_set_input, $where:p_bool_exp!) {
        update_p(_set: $set, where: $where) {
          affected_rows
          returning {
            ...PModelFields
          }
        }
      }
      ${PModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_P_MODEL_BYID = gql`
      mutation removePModelById($id: Int) {
        delete_p(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${PModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_P_MODELS = gql`
      mutation removePModel($where:p_bool_exp!) {
        delete_p(where: $where) {
          affected_rows
        }
      }
      ${PModelFields}
    `;

    // patient GQL
    //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const PatientModelFields = gql`
      fragment PatientModelFields on patient {
      id
      resource
      }
    `;


    // Mutation: Insert
    //

    const INSERT_PATIENT_MODEL = gql`
      mutation insertPatientModel($objects: [patient_insert_input!]!, $onConflict: patient_on_conflict) {
        insert_patient(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFields}
    `;


    // Query: FetchById
    //

    const FETCH_PATIENT_MODEL_BYID = gql`
      query fetchPatientModelById($patientId: uuid!) {
        patient_by_pk(id: $patientId) {
          ...PatientModelFields
        }
      }
      ${PatientModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_PATIENT_MODELS = gql`
      query fetchPatientModel(
        $distinct_on: [patient_select_column!]
        $where: patient_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [patient_order_by!]
      ) {
        patient(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...PatientModelFields
        }
      }
      ${PatientModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_PATIENT_MODEL_BYID = gql`
      mutation updatePatientModelById($id: uuid, $set: patient_set_input) {
        update_patient(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_PATIENT_MODELS = gql`
      mutation updatePatientModel($set: patient_set_input, $where:patient_bool_exp!) {
        update_patient(_set: $set, where: $where) {
          affected_rows
          returning {
            ...PatientModelFields
          }
        }
      }
      ${PatientModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_PATIENT_MODEL_BYID = gql`
      mutation removePatientModelById($id: uuid) {
        delete_patient(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${PatientModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_PATIENT_MODELS = gql`
      mutation removePatientModel($where:patient_bool_exp!) {
        delete_patient(where: $where) {
          affected_rows
        }
      }
      ${PatientModelFields}
    `;

    // users GQL
    //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const UsersModelFields = gql`
      fragment UsersModelFields on users {
      created_at
      id
      name
      }
    `;


    // Mutation: Insert
    //

    const INSERT_USERS_MODEL = gql`
      mutation insertUsersModel($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
        insert_users(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFields}
    `;


    // Query: FetchById
    //

    const FETCH_USERS_MODEL_BYID = gql`
      query fetchUsersModelById($usersId: Int!) {
        users_by_pk(id: $usersId) {
          ...UsersModelFields
        }
      }
      ${UsersModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_USERS_MODELS = gql`
      query fetchUsersModel(
        $distinct_on: [users_select_column!]
        $where: users_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [users_order_by!]
      ) {
        users(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...UsersModelFields
        }
      }
      ${UsersModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_USERS_MODEL_BYID = gql`
      mutation updateUsersModelById($id: Int, $set: users_set_input) {
        update_users(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_USERS_MODELS = gql`
      mutation updateUsersModel($set: users_set_input, $where:users_bool_exp!) {
        update_users(_set: $set, where: $where) {
          affected_rows
          returning {
            ...UsersModelFields
          }
        }
      }
      ${UsersModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_USERS_MODEL_BYID = gql`
      mutation removeUsersModelById($id: Int) {
        delete_users(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${UsersModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_USERS_MODELS = gql`
      mutation removeUsersModel($where:users_bool_exp!) {
        delete_users(where: $where) {
          affected_rows
        }
      }
      ${UsersModelFields}
    `;

    // vehicle GQL
    //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const VehicleModelFields = gql`
      fragment VehicleModelFields on vehicle {
      id
      name
      }
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLE_MODEL = gql`
      mutation insertVehicleModel($objects: [vehicle_insert_input!]!, $onConflict: vehicle_on_conflict) {
        insert_vehicle(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFields}
    `;


    // Query: FetchById
    //

    const FETCH_VEHICLE_MODEL_BYID = gql`
      query fetchVehicleModelById($vehicleId: String!) {
        vehicle_by_pk(id: $vehicleId) {
          ...VehicleModelFields
        }
      }
      ${VehicleModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLE_MODELS = gql`
      query fetchVehicleModel(
        $distinct_on: [vehicle_select_column!]
        $where: vehicle_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_order_by!]
      ) {
        vehicle(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...VehicleModelFields
        }
      }
      ${VehicleModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLE_MODEL_BYID = gql`
      mutation updateVehicleModelById($id: String, $set: vehicle_set_input) {
        update_vehicle(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLE_MODELS = gql`
      mutation updateVehicleModel($set: vehicle_set_input, $where:vehicle_bool_exp!) {
        update_vehicle(_set: $set, where: $where) {
          affected_rows
          returning {
            ...VehicleModelFields
          }
        }
      }
      ${VehicleModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLE_MODEL_BYID = gql`
      mutation removeVehicleModelById($id: String) {
        delete_vehicle(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${VehicleModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLE_MODELS = gql`
      mutation removeVehicleModel($where:vehicle_bool_exp!) {
        delete_vehicle(where: $where) {
          affected_rows
        }
      }
      ${VehicleModelFields}
    `;

    // vehicle_location GQL
    //------------------------------------------------
  


    // Scalar Fields Fragment
    //

    export const Vehicle_LocationModelFields = gql`
      fragment Vehicle_LocationModelFields on vehicle_location {
      id
      location
      timestamp
      vehicle_id
      }
    `;


    // Mutation: Insert
    //

    const INSERT_VEHICLE_LOCATION_MODEL = gql`
      mutation insertVehicle_LocationModel($objects: [vehicle_location_insert_input!]!, $onConflict: vehicle_location_on_conflict) {
        insert_vehicle_location(objects: $objects, on_conflict: $onConflict) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFields}
    `;


    // Query: FetchById
    //

    const FETCH_VEHICLE_LOCATION_MODEL_BYID = gql`
      query fetchVehicle_LocationModelById($vehicle_LocationId: Int!) {
        vehicle_location_by_pk(id: $vehicle_LocationId) {
          ...Vehicle_LocationModelFields
        }
      }
      ${Vehicle_LocationModelFields}
    `;


    // Query: Fetch
    //

    const FETCH_VEHICLE_LOCATION_MODELS = gql`
      query fetchVehicle_LocationModel(
        $distinct_on: [vehicle_location_select_column!]
        $where: vehicle_location_bool_exp
        $limit: Int
        $offset: Int
        $order_by: [vehicle_location_order_by!]
      ) {
        vehicle_location(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
          ...Vehicle_LocationModelFields
        }
      }
      ${Vehicle_LocationModelFields}
    `;


    // Mutation: Update by Id
    //

    const UPDATE_VEHICLE_LOCATION_MODEL_BYID = gql`
      mutation updateVehicle_LocationModelById($id: Int, $set: vehicle_location_set_input) {
        update_vehicle_location(_set: $set, where: { id: { _eq: $id } }) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFields}
    `;


    // Mutation: Update
    //

    const UPDATE_VEHICLE_LOCATION_MODELS = gql`
      mutation updateVehicle_LocationModel($set: vehicle_location_set_input, $where:vehicle_location_bool_exp!) {
        update_vehicle_location(_set: $set, where: $where) {
          affected_rows
          returning {
            ...Vehicle_LocationModelFields
          }
        }
      }
      ${Vehicle_LocationModelFields}
    `;


    // Mutation: Remove by Id
    //

    const REMOVE_VEHICLE_LOCATION_MODEL_BYID = gql`
      mutation removeVehicle_LocationModelById($id: Int) {
        delete_vehicle_location(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
      ${Vehicle_LocationModelFields}
    `;


    // Mutation: Remove
    //

    const REMOVE_VEHICLE_LOCATION_MODELS = gql`
      mutation removeVehicle_LocationModel($where:vehicle_location_bool_exp!) {
        delete_vehicle_location(where: $where) {
          affected_rows
        }
      }
      ${Vehicle_LocationModelFields}
    `;