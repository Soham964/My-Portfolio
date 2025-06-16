import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Typography, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import LinkIcon from "@mui/icons-material/Link"

const Certificate = ({ certificate }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				className=""
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-media": {
							filter: "contrast(1.05) brightness(1) saturate(1.1)",
						},
					},
				}}>
				{/* Certificate Media (Image or PDF) with Initial Filter */}
				<Box
					sx={{
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						},
					}}>
					{certificate.PDF ? (
						<iframe
							src={certificate.PDF}
							title={certificate.Title || "Certificate PDF"}
							className="certificate-media"
							style={{
								width: "100%",
								height: "200px", // Adjust height as needed for thumbnail
								display: "block",
								objectFit: "cover",
								filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
								transition: "filter 0.3s ease",
							}}
							onClick={handleOpen}
						>
							Your browser does not support PDFs.
						</iframe>
					) : (
						<img
							className="certificate-media"
							src={certificate.Img}
							alt={certificate.Title || "Certificate"}
							style={{
								width: "100%",
								height: "auto",
								display: "block",
								objectFit: "cover",
								filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
								transition: "filter 0.3s ease",
							}}
							onClick={handleOpen}
						/>
					)}
				</Box>

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						opacity: 0,
						transition: "all 0.3s ease",
						cursor: "pointer",
						zIndex: 2,
					}}
					onClick={handleOpen}>
					{/* Hover Content */}
					<Box
						className="hover-content"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							textAlign: "center",
							width: "100%",
							color: "white",
						}}>
						<FullscreenIcon
							sx={{
								fontSize: 40,
								mb: 1,
								filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
							}}
						/>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								textShadow: "0 2px 4px rgba(0,0,0,0.3)",
							}}>
							View Certificate
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: 0,
					padding: 0,
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
					},
				}}>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						m: 0,
						p: 0,
						outline: "none",
						"&:focus": {
							outline: "none",
						},
					}}>
					{/* Close Button */}
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							zIndex: 1,
							padding: 1,
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}
						size="large">
						<CloseIcon sx={{ fontSize: 24 }} />
					</IconButton>

					{/* Modal Content: Image or PDF */}
					{certificate.PDF ? (
						<iframe
							src={certificate.PDF}
							title={certificate.Title || "Certificate PDF Full View"}
							style={{
								display: "block",
								maxWidth: "100%",
								maxHeight: "90vh",
								width: "100%",
								height: "70vh", // Adjust height for full view
								margin: "0 auto",
								objectFit: "contain",
							}}>
							Your browser does not support PDFs.
						</iframe>
					) : (
						<img
							src={certificate.Img}
							alt={certificate.Title || "Certificate Full View"}
							style={{
								display: "block",
								maxWidth: "100%",
								maxHeight: "90vh",
								margin: "0 auto",
								objectFit: "contain",
							}}
						/>
					)}

					{/* Certificate Details and Link */}
					<Box
						sx={{
							mt: 2,
							textAlign: "center",
							color: "white",
							padding: "0 20px",
						}}>
						<Typography variant="h5" id="modal-modal-title" sx={{ mb: 1, fontWeight: 600 }}>
							{certificate.Title}
						</Typography>
						<Typography variant="body2" id="modal-modal-description" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
							{certificate.Description} {certificate.Date && `(${certificate.Date})`}
						</Typography>
						{certificate.Link && (
							<Button
								variant="contained"
								href={certificate.Link}
								target="_blank"
								rel="noopener noreferrer"
								startIcon={<LinkIcon />}
								sx={{
									mt: 2,
									bgcolor: "#6366f1",
									"&:hover": {
										bgcolor: "#a855f7",
									},
								}}>
								View Credential
							</Button>
						)}
					</Box>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
