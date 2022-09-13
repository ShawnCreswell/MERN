import React, { useState } from "react";
import axios from "axios";

const AuthorForm = () => {
    const [name, setName] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            name
        })
    }
}