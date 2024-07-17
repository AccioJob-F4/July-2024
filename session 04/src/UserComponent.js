import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

const UserComponent = ({ user, loading, error, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return <div>LOADING...</div>;
  if (error) return <div> Error: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h1>User Data</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
