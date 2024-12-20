import React from "react";
import { Container, Typography } from "@mui/material";
import WorkDurationForm from "./components/WorkDurationForm";

function App() {
    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography variant="h4" align="center" gutterBottom>
                
            </Typography>
            <WorkDurationForm />
        </Container>
    );
}

export default App;
