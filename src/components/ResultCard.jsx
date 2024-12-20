import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ResultCard = ({ years, months }) => {
    return (
        <Card
            sx={{
                marginTop: 3,
                backgroundColor: "#333333",  
                padding: 3,  
                borderRadius: 2,  
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",  
                "&:hover": {
                    boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)", 
                }
            }}
        >
            <CardContent>
                <Typography 
                    variant="h6" 
                    align="center" 
                    sx={{ 
                        fontWeight: "bold", 
                        color: "#00E5FF", 
                        textShadow: "0px 0px 10px rgba(0, 229, 255, 0.8)", 
                    }}
                >
                    Hasil Penghitungan
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        marginTop: 2,
                        fontSize: "1.2rem",  
                        fontWeight: "bold",  
                        color: "#32CD32",  
                        textShadow: "0px 0px 10px rgba(50, 205, 50, 0.8)", 
                    }}
                >
                    {isNaN(years) || isNaN(months) ? (
                        "Masukkan tanggal yang valid"
                    ) : (
                        `Masa Kerja Anda: ${years} tahun, ${months} bulan`
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ResultCard;
