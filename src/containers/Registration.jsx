import { Box, Button, Card, Divider, Grid, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSnackbar } from "notistack";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";
import Header from "../components/Header";
import Main from "../components/Main";
import { auth } from "../firebase";

const Registration = () => {

	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate()

	const [field, setField] = useState({
		email: '',
		password: '',
	});

	const submitRegistration = async (e) => {
		e.preventDefault();

		try {
			const user = await createUserWithEmailAndPassword(auth, field.email, field.password);
			if (user) {
				enqueueSnackbar('Hallo, Selamat datang', { variant: 'success' });
				navigate("/home");
			}
		} catch (error) {
			enqueueSnackbar('Oops, periksa kembali atau gunakan email lain', { variant: 'info' });
		}
	}

	return (
		<Fragment>
			<Body>
				<Header />
				<Main>
					<Grid container justifyContent="center">
						<Grid item xs={12} sm={6} md={4}>
							<Box my={5}>
								<Card sx={{ bgcolor: '#222831' }} component="form" onSubmit={submitRegistration}>
									<Box p={2}>
										<Box my={3}>
											<Box mb={5}>
												<Typography variant="h5" component="h1" align="center"> Selamat Datang </Typography>
												<Typography variant="body2" color="GrayText" align="center"> Isikan formulir dibawah untuk registrasi </Typography>
											</Box>
											<Box>
												<TextField
													margin="dense"
													fullWidth
													variant="filled"
													label="Email"
													sx={{ input: { color: 'white' } }}
													type="email"
													onChange={(e) => setField((s) => ({ ...s, email: e.target.value }))}
												/>
												<TextField
													margin="dense"
													fullWidth
													variant="filled"
													label="Password"
													sx={{ input: { color: 'white' } }}
													type="password"
													onChange={(e) => setField((s) => ({ ...s, password: e.target.value }))}
												/>
											</Box>
											<Box mt={5}>
												<Box mt={5}>
													<Button color="info" variant="contained" fullWidth type="submit"> registrasi </Button>
													<Divider sx={{ marginY: 2, color: 'white' }}> <Typography color="GrayText">atau</Typography> </Divider>
													<Button color="secondary" variant="contained" fullWidth type="submit" onClick={() => navigate('/login')}> login </Button>
												</Box>
											</Box>
										</Box>
									</Box>
								</Card>
							</Box>
						</Grid>
					</Grid>
				</Main>
			</Body>
		</Fragment>
	)
}

export default Registration;