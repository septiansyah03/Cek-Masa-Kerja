import React, { useState } from "react";
import { TextField, Button, Box, Card, CardContent, Typography } from "@mui/material";
import ResultCard from "./ResultCard";

const WorkDurationForm = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState(null);

    const calculateWorkDuration = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        setResult({ years, months });
    };

    const currentYear = new Date().getFullYear(); 

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#121212", 
                padding: 3,
                animation: "fadeIn 1.5s ease-in-out", 
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    backgroundColor: "#1E1E1E", 
                    borderRadius: 2,
                    boxShadow: "0 0 15px #00BCD4, 0 0 30px #00BCD4", 
                    padding: 2,
                    animation: "flipInX 1s ease-out",

                }}
            >
                <CardContent>
                    {/* Judul */}
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#00E5FF", 
                        }}
                    >
                        MASA KERJA PEGAWAI
                    </Typography>

                    {/* Deskripsi */}
                    <Typography
                        variant="body1"
                        align="center"
                        gutterBottom
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 300,
                            color: "#B0BEC5",
                        }}
                    >
                    Masukkan tanggal mulai dan akhir untuk menghitung masa kerja
                    </Typography>

                    {/* Input tanggal mulai */}
                    <TextField
                        label="Tanggal Mulai Kerja"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        sx={{
                            backgroundColor: "#2E2E2E",
                            borderRadius: 1,
                            input: { color: "#E0E0E0" }, 
                            "& .MuiInputLabel-root": {
                                color: "#FFFFFF", 
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#FFFFFF", 
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#00BCD4", 
                                },
                                "&:hover fieldset": {
                                    borderColor: "#00E5FF", 
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#00E5FF", 
                                },
                            },
                        }}
                    />

                    {/* Input tanggal akhir */}
                    <TextField
                        label="Tanggal Akhir Kerja"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        sx={{
                            backgroundColor: "#2E2E2E",
                            borderRadius: 1,
                            input: { color: "#E0E0E0" }, 
                            "& .MuiInputLabel-root": {
                                color: "#FFFFFF", 
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#FFFFFF", 
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#00BCD4", 
                                },
                                "&:hover fieldset": {
                                    borderColor: "#00E5FF", 
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#00E5FF", 
                                },
                            },
                        }}
                    />

                    {/* Tombol Hitung */}
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={calculateWorkDuration}
                        sx={{
                            marginTop: 2,
                            backgroundColor: "#00BCD4",
                            color: "#121212",
                            fontWeight: 600,
                            "&:hover": {
                                backgroundColor: "#00E5FF",
                            },
                        }}
                    >
                        Hitung Masa Kerja Anda
                    </Button>

                    {/* Hasil */}
                    {result && <ResultCard years={result.years} months={result.months} />}
                </CardContent>

                {/* Copyright */}
                <Box sx={{ padding: 2, textAlign: "center", color: "#B0BEC5" }}>
                    <Typography variant="body2">
                        &copy; {currentYear} Design by AS - All Rights Reserved.
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default WorkDurationForm;
