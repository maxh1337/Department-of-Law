import React from "react";
import { useNavigate } from "react-router-dom";
import p41 from "../../../images/p41.webp";
import "./41.css";
import Criminal from "../../ui/criminal-case/criminal-case";
import {
  PostanovlenieObOtkaze,
  PostanovleniePrinyatieDela,
} from "../../ui/allFiles";

const Fortyone = () => {
  const documents = JSON.parse(localStorage.getItem("documents"));

  const navigate = useNavigate();
  return (
    <div>
      <Criminal />
      <img width="640px" height="542px" src={p41} alt="p41" />
      <button
        onClick={() => {
          navigate("/44");
          const newDocuments = [...documents, PostanovlenieObOtkaze];
          localStorage.setItem("documents", JSON.stringify(newDocuments));
          localStorage.setItem("choose", JSON.stringify("reject"));
        }} //Отказ от возбуждения href="https://docs.google.com/document/d/1Zjf5mnrMhBdqa6PM-IgB-atVUpFwvhofYT0LILXmtkc/edit?usp=sharing"
        className="button-link"
        style={{
          position: "absolute",
          top: 170,
          left: "calc(50% - 50px)",
          width: 300,
          height: 80,
          color: "white",
        }}
      />
      <button
        onClick={() => {
          navigate("/44");
          const newDocuments = [...documents, PostanovleniePrinyatieDela];
          localStorage.setItem("documents", JSON.stringify(newDocuments));
          localStorage.setItem("choose", JSON.stringify("accept"));
        }} //Возбуждение дела href="https://docs.google.com/document/d/1CL9B9aThbGRPi9CuaU0GLDsqnhkz_QH3huqXF-mcXUo/edit?usp=sharing"
        className="button-link"
        style={{
          position: "absolute",
          top: 110,
          left: "calc(50% - 150px)",
          width: 300,
          height: 80,
          color: "white",
        }}
      />
    </div>
  );
};

export default Fortyone;
