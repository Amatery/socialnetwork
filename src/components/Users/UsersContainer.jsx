import React from "react";
import {connect} from 'react-redux';
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersSelector,
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);

    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

// let mapStateToProps = (state) => {
// //     return {
// //         users: state.usersPage.users,
// //         pageSize: state.usersPage.pageSize,
// //         totalUsersCount: state.usersPage.totalUsersCount,
// //         currentPage: state.usersPage.currentPage,
// //         isFetching: state.usersPage.isFetching,
// //         followingInProgress: state.usersPage.followingInProgress
// //     }
// // };

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: requestUsers
        })
)(UsersContainer)