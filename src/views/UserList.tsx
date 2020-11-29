import React, { Fragment, useState, FC } from "react";
import { useEffect } from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { connect } from "react-redux";
import { fetchUsers, updateUser } from "../redux";
import { User, Usercolumns } from "./User";
import Container from "react-bootstrap/esm/Container";
import Spinner from "react-bootstrap/esm/Spinner";

interface UserProps {
    userData: any,
    fetchUsers: () => void,
    updateUser: (user: User) => void
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        updateUser: (user: User) => dispatch(updateUser(user))
    }
}

const UserList: FC<UserProps> = (props) => {
    useEffect(() => {
        props.fetchUsers();
    }, []);

    const containerStyle = { marginTop: 10 };

    const beforeSaveCell = async (oldValue, newValue, row: User, column, done) => {
        if(row[column.dataField] != newValue) {
            row[column.dataField] = newValue;
            props.updateUser(row);
        }
    }

    return (
        <Container fluid style={containerStyle}>
            {
                props.userData.loading ? (
                    <div className="spinner-container">
                        <Spinner animation="border" variant="warning" />
                        <div>Loading...</div>
                    </div>
                ) : (
                        props.userData.error ? (
                            <div>
                                {props.userData.error}
                            </div>
                        ) : (
                                <div>
                                    {
                                        !props.userData?.users?.length ? (
                                            <h4>No records found!</h4>
                                        ) : (
                                                <BootstrapTable
                                                    id="user-list"
                                                    bootstrap4={true}
                                                    keyField='Id'
                                                    data={props.userData.users}
                                                    columns={Usercolumns}
                                                    filter={filterFactory()}
                                                    cellEdit={cellEditFactory(
                                                        {
                                                            mode: 'click',
                                                            blurToSave: true,
                                                            beforeSaveCell
                                                        })
                                                    }
                                                />

                                            )
                                    }
                                </div>
                            )
                    )
            }

        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

