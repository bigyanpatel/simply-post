import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  PostsPage,
  Profile,
  SignupPage,
  ExplorePage,
  NotFound,
  BookmarkPage,
} from "../page/pageExport";
import { SinglePostPage } from "../page/SinglePostPage/SinglePostPage";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  const authData = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <PostsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile/:userName"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      <Route
        path="/post/:postId"
        element={
          <PrivateRoute>
            <SinglePostPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/explore"
        element={
          <PrivateRoute>
            <ExplorePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/bookmark"
        element={
          <PrivateRoute>
            <BookmarkPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
      {!authData.token ? (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Navigate replace to="/" />} />
          <Route path="/signup" element={<Navigate replace to="/" />} />
        </>
      )}
    </Routes>
  );
};