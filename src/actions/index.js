import {
  profilesRef,
  votesRef,
  authRef,
  provider
} from "../config/firebase";

export const addProfileDiscipline = (discipline, uid, name) => async dispatch => {
  // add the discipline
  profilesRef
    .child(uid)
    .push()
    .set(discipline);

  // add the user's name if there isn't one
  profilesRef
    .child(uid).child('name').set(name);
};

export const updateDiscipline = (disciplineId, uid, disciplineObject) => async dispatch => {
  profilesRef
    .child(uid)
    .child(disciplineId)
    .update(disciplineObject);
};

export const deleteDiscipline = (disciplineId, uid) => async dispatch => {
  profilesRef
    .child(uid)
    .child(disciplineId)
    .remove();
};

export const fetchProfileDiscipline = uid => async dispatch => {
  profilesRef
    .child(uid)
    .on("value", snapshot => {
      dispatch({
        type: "FETCH_PROFILE_DISCIPLINE",
        payload: snapshot.val()
      });
    });
};

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: "FETCH_USER",
        payload: user
      });
    } else {
      dispatch({
        type: "FETCH_USER",
        payload: null
      });
    }
  });
};

export const fetchAvailableUsers = () => async dispatch => {
  console.log("Fetching all available users");
  profilesRef
    .on("value", snapshot => {
      dispatch({
        type: "FETCH_AVAILABLE_USERS",
        payload: snapshot.val()
      });
    });
};

export const updateVotingChoices = (uid, votingChoices) => async dispatch => {
  votesRef
    .child(uid)
    .update(votingChoices);
}

export const updateVote = (uid, votedPersonId, voteObject) => async dispatch => {
  votesRef
    .child(uid)
    .child(votedPersonId)
    .update(voteObject);
}

export const deleteVote = (uid, votedPersonId) => async dispatch => {
  votesRef
    .child(uid)
    .child(votedPersonId)
    .remove();
};

export const fetchVotesForOnePerson = (uid) => async dispatch => {
  votesRef
    .child(uid)
    .on("value", snapshot => {
      dispatch({
        type: "FETCH_VOTES_FOR_ONE_PERSON",
        payload: snapshot.val()
      });
    });
};

export const fetchAllVotes = () => async dispatch => {
  votesRef
    .on("value", snapshot => {
      dispatch({
        type: "FETCH_ALL_VOTES",
        payload: snapshot.val()
      });
    });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {
      // Check if user signed in with @satalia email.
      if (result.user.email.includes("@satalia")) {
        console.log("a satalian");
      } else {
        console.log("not a satalian");
        // Sign user out automatically if the email is not correct
        authRef
          .signOut()
          .then(() => {
            // Sign-out successful.
            window.alert('Please sign in with your Satalia email. :)');
          })
          .catch(error => {
            console.log(error);
          });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};
