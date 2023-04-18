import {
    Tab,
    Chip,
    Grid,

    Typography,

    Slider as MUISlider,
    Box,
} from '@mui/material';



export default function Catastro() {
    return (

        <Grid xs={12} md={12}>
            <Typography variant="h2" align="left">
                Catastro
            </Typography>
            <Typography sx={{ color: 'text.secondary', mx: 'auto', mb: 3 }} align="left">
                Actualización: 15/04/2023
            </Typography>
            <Grid xs={12} md={12} sx={{ mb: 5 }} align="left">


                <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
                    REQUISITOS PARA LA INSTALACIÓN DE AGUA POTABLE Y/O ALCANTARILLADO
                </Typography>
                <Typography sx={{ color: 'text.secondary', mx: 'auto' }} align="left">
                    <ul>
                        <li>Elaborará una solicitud de INSTALACION, CAMBIO DE NOMBRE, RENOVACIÓN de agua y/o alcantarillado dirigido a la Sra. Alcaldesa Dra. María Patricia Arce Guzmán.</li>
                        <li>Fotocopia de Cedula de Identidad.</li>
                        <li>Fotocopia del plano aprobado por el Gobierno Autónomo Municipal de Vinto y minuta de trasferencia.</li>
                        <li>Certificado de defunción u otros (para cambio de nombre).</li>
                        <li>Ultima papeleta de pago agua y/o alcantarillado (para cambio de nombre).</li>
                        <li>Fotocopia de la última papeleta de pago de impuestos.</li>
                        <li>Comprar un folder de trámite administrativo de CAJA del Gobierno Autónomo Municipal de Viento, para el trámite de agua y/o alcantarillado.</li>
                        <li>Programar la inspección técnica en secretaria de Saneamiento Básico, Para su informe respectivo, para el trámite de agua y/o alcantarillado.</li>
                        <li>on el informe de cancelación otorgado pagar Bs 150,00 (Ciento cincuenta 00/100 bolivianos), en caja del Gobierno Autónomo Municipal de Vinto.</li>
                    </ul>
                </Typography>
            </Grid>
        </Grid>

    );
}
