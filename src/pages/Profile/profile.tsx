import React from 'react';
import MainLayout from 'layouts/main-layout'; // Assuming MainLayout is in this folder
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import ProfileImage from 'assets/images/avatars/avatar1.png';

const PatientProfilePage = () => {
  // Sample patient data
  const patient = {
    name: 'Priyanshu Sachdeva',
    title: 'Mr.',
    avatarUrl: ProfileImage, // Example avatar URL
    dateOfBirth: '01/15/1985',
    gender: 'Male',
    bloodGroup: 'O+',
    medicalHistory: ['Hypertension', 'Diabetes Type 2', 'Asthma'],
    currentMedications: [
      'Lisinopril (for hypertension)',
      'Metformin (for diabetes)',
      'Albuterol (for asthma)',
    ],
    consultationHours: 'Mon - Fri: 9 AM - 6 PM',
    primaryCarePhysician: 'Dr. Jane Smith',
    contactDetails: {
      email: 'jason@example.com',
      phone: '+1234567890',
    },
    emergencyContact: '+9876543210',
  };

  return (
    <MainLayout>
      <Stack direction="column" spacing={3} alignItems="center" sx={{ padding: 3 }}>
        {/* Profile Avatar and Name */}
        <Avatar alt={patient.name} src={patient.avatarUrl} sx={{ width: 150, height: 150 }} />
        <Typography variant="h5" align="center" gutterBottom>
          {patient.title} {patient.name}
        </Typography>

        {/* Personal Details Section */}
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Personal Details:
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {patient.dateOfBirth}
            </Typography>
            <Typography variant="body1">
              <strong>Gender:</strong> {patient.gender}
            </Typography>
            <Typography variant="body1">
              <strong>Blood Group:</strong> {patient.bloodGroup}
            </Typography>
          </Stack>
        </Paper>

        {/* Medical History */}
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Medical History:
          </Typography>
          <Stack spacing={2}>
            {patient.medicalHistory.length > 0 ? (
              patient.medicalHistory.map((condition, index) => (
                <Typography variant="body1" key={index}>
                  - {condition}
                </Typography>
              ))
            ) : (
              <Typography variant="body1">No major medical history.</Typography>
            )}
          </Stack>
        </Paper>

        {/* Current Medications */}
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Current Medications:
          </Typography>
          <Stack spacing={2}>
            {patient.currentMedications.length > 0 ? (
              patient.currentMedications.map((medication, index) => (
                <Typography variant="body1" key={index}>
                  - {medication}
                </Typography>
              ))
            ) : (
              <Typography variant="body1">No current medications.</Typography>
            )}
          </Stack>
        </Paper>

        {/* Primary Care Physician */}
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Primary Care Physician:
          </Typography>
          <Typography variant="body1">{patient.primaryCarePhysician}</Typography>
        </Paper>

        {/* Contact Information */}
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Contact Information:
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1">
              <strong>Email:</strong> {patient.contactDetails.email}
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> {patient.contactDetails.phone}
            </Typography>
          </Stack>
        </Paper>

        {/* Emergency Contact */}
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 800, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Emergency Contact:
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {patient.emergencyContact}
          </Typography>
        </Paper>
      </Stack>
    </MainLayout>
  );
};

export default PatientProfilePage;
