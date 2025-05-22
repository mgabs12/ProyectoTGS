
// Datos simulados para el sistema
const mockData = {
    doctors: [
        { id: 1, name: "Dra. María González", specialty: "general", available: true, schedule: "8:00-17:00" },
        { id: 2, name: "Dr. Carlos Méndez", specialty: "general", available: true, schedule: "9:00-18:00" },
        { id: 3, name: "Dr. Javier Ramírez", specialty: "pediatria", available: true, schedule: "8:00-16:00" },
        { id: 4, name: "Dra. Sofía Vargas", specialty: "pediatria", available: true, schedule: "10:00-18:00" },
        { id: 5, name: "Dr. Luis Torres", specialty: "ginecologia", available: true, schedule: "8:00-17:00" },
        { id: 6, name: "Dra. Ana Morales", specialty: "ginecologia", available: true, schedule: "9:00-17:00" },
        { id: 7, name: "Dr. Roberto Blanco", specialty: "traumatologia", available: true, schedule: "8:00-16:00" },
        { id: 8, name: "Dra. Elena Castro", specialty: "traumatologia", available: true, schedule: "14:00-22:00" },
        { id: 9, name: "Dr. David Ortega", specialty: "dermatologia", available: true, schedule: "8:00-15:00" },
        { id: 10, name: "Dra. Laura Martínez", specialty: "dermatologia", available: true, schedule: "13:00-20:00" }
    ],
    patients: [
        { id: "P001", name: "Juan Pérez", birthdate: "1985-06-15", gender: "M", phone: "555-1234", email: "juan.perez@example.com", address: "Calle Principal 123", lastVisit: "2025-04-25", notes: "Hipertensión controlada" },
        { id: "P002", name: "Ana López", birthdate: "1990-03-22", gender: "F", phone: "555-5678", email: "ana.lopez@example.com", address: "Avenida Central 456", lastVisit: "2025-04-28", notes: "Alergia a penicilina" },
        { id: "P003", name: "Carlos Martínez", birthdate: "1978-11-07", gender: "M", phone: "555-9012", email: "carlos.martinez@example.com", address: "Plaza Mayor 789", lastVisit: "2025-05-01", notes: "Diabetes tipo 2" },
        { id: "P004", name: "María García", birthdate: "1995-08-30", gender: "F", phone: "555-3456", email: "maria.garcia@example.com", address: "Calle Secundaria 321", lastVisit: "2025-05-05", notes: "Asma bronquial" },
        { id: "P005", name: "Pedro González", birthdate: "1982-01-17", gender: "M", phone: "555-7890", email: "pedro.gonzalez@example.com", address: "Avenida Norte 654", lastVisit: "2025-05-08", notes: "Control rutinario" },
        { id: "P006", name: "Laura Rodríguez", birthdate: "1974-04-12", gender: "F", phone: "555-2345", email: "laura.rodriguez@example.com", address: "Calle Sur 987", lastVisit: "2025-05-10", notes: "Artritis reumatoide" },
        { id: "P007", name: "Miguel Fernández", birthdate: "1988-09-23", gender: "M", phone: "555-6789", email: "miguel.fernandez@example.com", address: "Avenida Este 159", lastVisit: "2025-05-12", notes: "Migraña crónica" },
        { id: "P008", name: "Carmen Díaz", birthdate: "1992-12-05", gender: "F", phone: "555-0123", email: "carmen.diaz@example.com", address: "Calle Oeste 753", lastVisit: null, notes: "Primera consulta" },
        { id: "P009", name: "Roberto Silva", birthdate: "1965-08-20", gender: "M", phone: "555-4567", email: "roberto.silva@example.com", address: "Calle Norte 246", lastVisit: "2025-05-14", notes: "Hipertensión y colesterol alto" },
        { id: "P010", name: "Isabel Moreno", birthdate: "1993-11-11", gender: "F", phone: "555-8901", email: "isabel.moreno@example.com", address: "Avenida Sur 135", lastVisit: "2025-05-13", notes: "Embarazo controlado" }
    ],
    appointments: [
        { id: 1, patientId: "P001", doctorId: 2, date: "2025-05-22", time: "09:00", specialty: "general", type: "routine", notes: "Control anual de hipertensión", status: "scheduled", priority: "normal" },
        { id: 2, patientId: "P002", doctorId: 5, date: "2025-05-22", time: "10:30", specialty: "ginecologia", type: "followup", notes: "Revisión postoperatoria", status: "confirmed", priority: "normal" },
        { id: 3, patientId: "P003", doctorId: 1, date: "2025-05-22", time: "11:00", specialty: "general", type: "routine", notes: "Control de diabetes", status: "scheduled", priority: "normal" },
        { id: 4, patientId: "P004", doctorId: 3, date: "2025-05-22", time: "15:30", specialty: "pediatria", type: "urgent", notes: "Control de asma", status: "scheduled", priority: "high" },
        { id: 5, patientId: "P005", doctorId: 7, date: "2025-05-23", time: "09:30", specialty: "traumatologia", type: "followup", notes: "Dolor en rodilla", status: "scheduled", priority: "normal" },
        { id: 6, patientId: "P006", doctorId: 9, date: "2025-05-23", time: "12:00", specialty: "dermatologia", type: "routine", notes: "Examen de lunares", status: "confirmed", priority: "normal" },
        { id: 7, patientId: "P007", doctorId: 2, date: "2025-05-23", time: "16:00", specialty: "general", type: "urgent", notes: "Dolor de cabeza severo", status: "scheduled", priority: "high" },
        { id: 8, patientId: "P008", doctorId: 4, date: "2025-05-24", time: "10:00", specialty: "pediatria", type: "routine", notes: "Primera consulta", status: "confirmed", priority: "normal" },
        { id: 9, patientId: "P009", doctorId: 1, date: "2025-05-24", time: "14:00", specialty: "general", type: "routine", notes: "Control de presión arterial", status: "scheduled", priority: "normal" },
        { id: 10, patientId: "P010", doctorId: 6, date: "2025-05-24", time: "11:30", specialty: "ginecologia", type: "followup", notes: "Control prenatal", status: "confirmed", priority: "normal" }
    ],
    timeSlots: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
                "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
    dailyStats: {
        "2025-05-22": { total: 24, attended: 21, waiting: 18 },
        "2025-05-23": { total: 26, attended: 22, waiting: 17 },
        "2025-05-24": { total: 20, attended: 18, waiting: 15 },
        "2025-05-25": { total: 15, attended: 13, waiting: 14 }
    },
    specialtyStats: {
        general: 35,
        pediatria: 28,
        ginecologia: 22,
        traumatologia: 18,
        dermatologia: 15
    }
};

// Variables globales
let currentPatient = null;
let nextAppointmentId = mockData.appointments.length + 1;
let nextPatientId = "P" + String(mockData.patients.length + 1).padStart(3, '0');
let currentDate = new Date();
let currentWeekStart = new Date(currentDate);
currentWeekStart.setDate(currentDate.getDate() - currentDate.getDay());
let charts = {}; // Almacenar referencias a los gráficos

// Inicialización cuando el DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistema inicializando...');
    
    // Configurar navegación
    setupNavigation();

    setTimeout(() => {
        initializeDashboard();
    }, 200);
    
     // Inicializar otras secciones
    initializeNewAppointment();
    initializeAppointmentList();
    initializeDoctorSchedule();
    initializePatientManagement();
    initializeStatistics();
    
    // Configurar notificaciones
    setupNotifications();
    
    console.log('Sistema inicializado correctamente');
});

// CONFIGURACIÓN DE NAVEGACIÓN
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            console.log('Navegando a:', targetSection);
            
            // Desactivar todas las secciones y enlaces
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active-section');
            });
            
            document.querySelectorAll('nav a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Activar la sección seleccionada y su enlace
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active-section');
                link.classList.add('active');
                
                // Ejecutar inicializaciones específicas según la sección
                switch(targetSection) {
                    case 'new-appointment':
                        refreshNewAppointment();
                        break;
                    case 'appointment-list':
                        refreshAppointmentList();
                        break;
                    case 'doctor-schedule':
                        refreshDoctorSchedule();
                        break;
                    case 'patient-management':
                        refreshPatientManagement();
                        break;
                    case 'statistics':
                        refreshStatistics();
                        break;
                    case 'dashboard':
                        refreshDashboard();
                        break;
                }
            }
        });
    });
}

// SISTEMA DE NOTIFICACIONES
function setupNotifications() {
    const notification = document.getElementById('notification');
    const closeBtn = document.querySelector('.close-notification');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.style.display = 'none';
        });
    }
    
    // Función global para mostrar notificaciones
    window.showNotification = function(message, type = 'info', duration = 3000) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    
    if (notificationMessage && notification) {
        notificationMessage.innerHTML = message; // Cambiado a innerHTML para aceptar formato HTML
        
        // Limpiar clases previas y agregar tipo
        notification.className = 'notification';
        notification.classList.add(`notification-${type}`);
        notification.style.display = 'flex';
        
        // Auto-cerrar después de cierto tiempo
        setTimeout(() => {
            notification.style.display = 'none';
        }, duration);
    }
    console.log(`Notificación: ${message}`);
};
}

// ===== DASHBOARD =====
function initializeDashboard() {
    console.log('Inicializando Dashboard...');
    updateDashboardStats();
    updateUpcomingAppointments();
    
    setTimeout(() => {
        initializeCharts();
    }, 100);
}

function refreshDashboard() {
    updateDashboardStats();
    updateUpcomingAppointments();
    // Reinicializar gráficos
    setTimeout(() => {
        initializeCharts();
    }, 100);
}

function updateDashboardStats() {
    const todayDate = formatDate(currentDate);
    const todayStats = mockData.dailyStats[todayDate] || { total: 0, attended: 0 };
    
    // Actualizar estadísticas
    const todayAppointmentsEl = document.getElementById('today-appointments');
    const availableDoctorsEl = document.getElementById('available-doctors');
    const attendanceRateEl = document.getElementById('attendance-rate');
    const avgWaitTimeEl = document.getElementById('avg-wait-time');
    
    if (todayAppointmentsEl) todayAppointmentsEl.textContent = todayStats.total;
    if (availableDoctorsEl) availableDoctorsEl.textContent = `${mockData.doctors.filter(d => d.available).length}/${mockData.doctors.length}`;
    if (attendanceRateEl) attendanceRateEl.textContent = "85%";
    if (avgWaitTimeEl) avgWaitTimeEl.textContent = "18 min";
}

function updateUpcomingAppointments() {
    const tableBody = document.getElementById('upcoming-appointments-table');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // Filtrar las citas de hoy y ordenarlas por hora
    const todayDate = formatDate(currentDate);
    const todayAppointments = mockData.appointments
        .filter(app => app.date === todayDate)
        .sort((a, b) => a.time.localeCompare(b.time));
    
    if (todayAppointments.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5" style="text-align: center;">No hay citas programadas para hoy</td>';
        tableBody.appendChild(row);
        return;
    }
    
    todayAppointments.forEach(appointment => {
        const patient = mockData.patients.find(p => p.id === appointment.patientId);
        const doctor = mockData.doctors.find(d => d.id === appointment.doctorId);
        
        if (patient && doctor) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${appointment.time}</td>
                <td>${patient.name}</td>
                <td>${doctor.name}</td>
                <td>${getSpecialtyName(appointment.specialty)}</td>
                <td><span class="status-${appointment.status}">${getStatusName(appointment.status)}</span></td>
            `;
            tableBody.appendChild(row);
        }
    });
}

function initializeCharts() {
    console.log('Inicializando gráficos del dashboard...');
    
    // Esperar un poco para asegurar que el DOM esté completamente cargado
    setTimeout(() => {
        // Gráfico de citas por especialidad
        const specialtyCanvas = document.getElementById('specialties-chart');
        console.log('Canvas encontrado:', specialtyCanvas);
        
        if (specialtyCanvas) {
            try {
                // Destruir gráfico existente si existe
                if (charts.specialty) {
                    charts.specialty.destroy();
                    console.log('Gráfico anterior destruido');
                }
                
                const ctx = specialtyCanvas.getContext('2d');
                console.log('Contexto 2D obtenido:', ctx);
                
                // Datos para el gráfico
                const labels = Object.keys(mockData.specialtyStats).map(getSpecialtyName);
                const data = Object.values(mockData.specialtyStats);
                
                console.log('Datos del gráfico:', { labels, data });
                
                charts.specialty = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: [
                                '#3498db',  // Azul
                                '#2ecc71',  // Verde
                                '#e74c3c',  // Rojo
                                '#f39c12',  // Naranja
                                '#9b59b6'   // Púrpura
                            ],
                            borderColor: '#ffffff',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                    usePointStyle: true,
                                    padding: 15,
                                    font: {
                                        size: 12
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.parsed;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = ((value / total) * 100).toFixed(1);
                                        return `${label}: ${value} citas (${percentage}%)`;
                                    }
                                }
                            }
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        }
                    }
                });
                
                console.log('Gráfico de especialidades creado exitosamente');
                
            } catch (error) {
                console.error('Error al crear el gráfico de especialidades:', error);
            }
        } else {
            console.error('No se encontró el canvas con id "specialties-chart"');
        }
    }, 500);
}

// ===== NUEVA CITA =====
function initializeNewAppointment() {
    console.log('Inicializando Nueva Cita...');
    
    const patientIdInput = document.getElementById('patient-id');
    const searchPatientBtn = document.getElementById('search-patient');
    const patientInfoContainer = document.getElementById('patient-info-container');
    const specialtySelect = document.getElementById('appointment-specialty');
    const doctorSelect = document.getElementById('appointment-doctor');
    const dateInput = document.getElementById('appointment-date');
    const timeSelect = document.getElementById('appointment-time');
    const appointmentTypeSelect = document.getElementById('appointment-type');
    const checkAvailabilityBtn = document.getElementById('check-availability');
    const appointmentForm = document.getElementById('appointment-form');
    
    if (!patientIdInput || !searchPatientBtn) {
        console.error('Elementos de nueva cita no encontrados');
        return;
    }
    
    // Configurar fecha mínima (hoy)
    if (dateInput) {
        const today = new Date();
        dateInput.min = formatDate(today);
        dateInput.value = formatDate(today);
    }
    
    // Event Listeners
    searchPatientBtn.addEventListener('click', searchPatient);
    
    if (specialtySelect) {
        specialtySelect.addEventListener('change', () => {
            updateDoctorsBySpecialty(specialtySelect.value, doctorSelect);
            clearTimeSlots();
        });
    }
    
    if (dateInput && doctorSelect) {
        dateInput.addEventListener('change', updateAvailableTimeSlots);
        doctorSelect.addEventListener('change', updateAvailableTimeSlots);
    }
    
    if (appointmentTypeSelect) {
        appointmentTypeSelect.addEventListener('change', updatePriority);
    }
    
    if (checkAvailabilityBtn) {
        checkAvailabilityBtn.addEventListener('click', checkAvailability);
    }
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', submitAppointment);
    }
    
    // Funciones específicas de Nueva Cita
    function searchPatient() {
        const patientId = patientIdInput.value.trim().toUpperCase();
        
        if (!patientId) {
            showNotification('Por favor, ingrese un ID de paciente', 'warning');
            return;
        }
        
        const patient = mockData.patients.find(p => p.id === patientId);
        
        if (patient) {
            currentPatient = patient;
            displayPatientInfo(patient);
            showNotification('Paciente encontrado correctamente', 'success');
        } else {
            currentPatient = null;
            hidePatientInfo();
            showNotification('Paciente no encontrado. Verifique el ID o registre un nuevo paciente.', 'error');
        }
    }
    
    function displayPatientInfo(patient) {
        if (!patientInfoContainer) return;
        
        const nameEl = document.getElementById('patient-name');
        const ageEl = document.getElementById('patient-age');
        const lastVisitEl = document.getElementById('patient-last-visit');
        
        if (nameEl) nameEl.textContent = patient.name;
        if (ageEl) ageEl.textContent = calculateAge(patient.birthdate) + ' años';
        if (lastVisitEl) lastVisitEl.textContent = patient.lastVisit ? formatDateDisplay(patient.lastVisit) : 'Primera visita';
        
        patientInfoContainer.classList.remove('hidden');
    }
    
    function hidePatientInfo() {
        if (patientInfoContainer) {
            patientInfoContainer.classList.add('hidden');
        }
    }
    
    function updateDoctorsBySpecialty(specialty, selectElement) {
        if (!selectElement) return;
        
        selectElement.innerHTML = '<option value="">Seleccione un médico</option>';
        
        if (!specialty) return;
        
        const filteredDoctors = mockData.doctors.filter(doctor => doctor.specialty === specialty && doctor.available);
        
        filteredDoctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = doctor.name;
            selectElement.appendChild(option);
        });
        
        console.log(`Cargados ${filteredDoctors.length} médicos para ${specialty}`);
    }
    
    function clearTimeSlots() {
        if (timeSelect) {
            timeSelect.innerHTML = '<option value="">Seleccione hora</option>';
        }
    }
    
    function updateAvailableTimeSlots() {
        if (!doctorSelect || !dateInput || !timeSelect) return;
        
        const doctorId = parseInt(doctorSelect.value);
        const date = dateInput.value;
        
        timeSelect.innerHTML = '<option value="">Seleccione hora</option>';
        
        if (!doctorId || !date) return;
        
        // Obtener horarios ocupados para el médico en esa fecha
        const bookedSlots = mockData.appointments
            .filter(app => app.doctorId === doctorId && app.date === date)
            .map(app => app.time);
        
        // Mostrar slots disponibles
        mockData.timeSlots.forEach(slot => {
            if (!bookedSlots.includes(slot)) {
                const option = document.createElement('option');
                option.value = slot;
                option.textContent = slot;
                timeSelect.appendChild(option);
            }
        });
        
        console.log(`Horarios disponibles: ${mockData.timeSlots.length - bookedSlots.length}`);
    }
    
    function updatePriority() {
        const appointmentType = appointmentTypeSelect?.value;
        const priorityIndicator = document.getElementById('priority-indicator');
        const prioritySpan = priorityIndicator?.querySelector('span');
        
        if (prioritySpan) {
            prioritySpan.className = '';
            const priority = getPriorityFromType(appointmentType);
            prioritySpan.classList.add(`priority-${priority}`);
            prioritySpan.textContent = getPriorityName(priority);
        }
    }
    
    
    function checkAvailability() {
    if (!validateAppointmentForm()) {
        showNotification('Por favor, complete todos los campos para verificar disponibilidad', 'warning', 3000);
        return;
    }

    const doctorId = parseInt(document.getElementById('appointment-doctor').value);
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;

    const isSlotTaken = mockData.appointments.some(app =>
        app.doctorId === doctorId &&
        app.date === date &&
        app.time === time
    );

    if (isSlotTaken) {
        // Mostrar opciones cuando el horario está ocupado
        const confirmMessage = 'El horario seleccionado ya está ocupado.\n\n' +
            '¿Qué desea hacer?\n' +
            '• Presione "Aceptar" para ver la agenda del médico\n' +
            '• Presione "Cancelar" para seleccionar otro horario';
        
        if (confirm(confirmMessage)) {
            // Navegar a la sección de médicos
            navigateToSection('doctor-schedule');
            
            // Pre-seleccionar el médico y fecha en la agenda
            setTimeout(() => {
                const doctorSelect = document.getElementById('doctor-select');
                const doctorDateInput = document.getElementById('doctor-date');
                
                if (doctorSelect) doctorSelect.value = doctorId;
                if (doctorDateInput) doctorDateInput.value = date;
                
                // Cargar la agenda automáticamente
                const viewScheduleBtn = document.getElementById('view-schedule');
                if (viewScheduleBtn) viewScheduleBtn.click();
            }, 300);
        }
        
        showNotification('Horario ocupado. Seleccione otro horario o revise la agenda del médico.', 'warning', 4000);
    } else {
        showNotification('Horario disponible para la cita', 'success', 2000);
    }
}

function navigateToSection(sectionId) {
    // Desactivar todas las secciones y enlaces
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    document.querySelectorAll('nav a').forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    // Activar la sección seleccionada
    const targetElement = document.getElementById(sectionId);
    const navLink = document.querySelector(`nav a[data-section="${sectionId}"]`);
    
    if (targetElement) {
        targetElement.classList.add('active-section');
    }
    
    if (navLink) {
        navLink.classList.add('active');
    }
    
    // Ejecutar función de actualización específica
    switch(sectionId) {
        case 'doctor-schedule':
            refreshDoctorSchedule();
            break;
        case 'appointment-list':
            refreshAppointmentList();
            break;
        case 'patient-management':
            refreshPatientManagement();
            break;
        case 'statistics':
            refreshStatistics();
            break;
        case 'dashboard':
            refreshDashboard();
            break;
    }
}
    
    function submitAppointment(e) {
    e.preventDefault();
    
    if (!validateAppointmentForm()) return;
    if (!currentPatient) {
        showNotification('Por favor, busque y seleccione un paciente', 'warning');
        return;
    }
    
    const doctorId = parseInt(doctorSelect.value);
    const date = dateInput.value;
    const time = timeSelect.value;
    const specialty = specialtySelect.value;
    
    // Verificar conflicto de horario antes de agendar
    const isSlotTaken = mockData.appointments.some(app =>
        app.doctorId === doctorId &&
        app.date === date &&
        app.time === time
    );
    
    if (isSlotTaken) {
        const conflictMessage = 'El horario seleccionado ya no está disponible.\n\n' +
            '¿Qué desea hacer?\n' +
            '• Ver agenda del médico\n' +
            '• Cambiar hora\n' +
            '• Cambiar fecha';
        
        const action = confirm(conflictMessage + '\n\nPresione "Aceptar" para ver la agenda del médico o "Cancelar" para seleccionar otro horario');
        
        if (action) {
            navigateToSection('doctor-schedule');
            setTimeout(() => {
                const doctorSelect = document.getElementById('doctor-select');
                const doctorDateInput = document.getElementById('doctor-date');
                
                if (doctorSelect) doctorSelect.value = doctorId;
                if (doctorDateInput) doctorDateInput.value = date;
                
                const viewScheduleBtn = document.getElementById('view-schedule');
                if (viewScheduleBtn) viewScheduleBtn.click();
            }, 300);
        }
        
        showNotification('Horario ya ocupado. Por favor, seleccione otro horario.', 'error', 4000);
        return;
    }
    
    // Crear nueva cita
    const newAppointment = {
        id: nextAppointmentId++,
        patientId: currentPatient.id,
        doctorId: doctorId,
        date: date,
        time: time,
        specialty: specialty,
        type: appointmentTypeSelect.value,
        notes: document.getElementById('appointment-notes')?.value || '',
        status: 'scheduled',
        priority: getPriorityFromType(appointmentTypeSelect.value)
    };
    
    // Agregar a la lista de citas
    mockData.appointments.push(newAppointment);
    
    // Obtener información del médico y paciente para el mensaje
    const patient = currentPatient;
    const doctor = mockData.doctors.find(d => d.id === doctorId);
    
    // Mensaje de éxito con detalles
    const successMessage = `¡Cita agendada exitosamente!<br><br>
        <strong>Paciente:</strong> ${patient.name}<br>
        <strong>Médico:</strong> ${doctor?.name || 'Médico no encontrado'}<br>
        <strong>Fecha:</strong> ${formatDateDisplay(date)}<br>
        <strong>Hora:</strong> ${time}<br>
        <strong>Especialidad:</strong> ${getSpecialtyName(specialty)}`;
    
    // Mostrar notificación con más tiempo y estilo de éxito
    showNotification(successMessage, 'success', 5000);
    
    // Mostrar detalles adicionales en consola para debugging
    console.log('Nueva cita creada:', newAppointment);
    console.log('Mensaje de éxito:', successMessage);
    
    // Limpiar formulario
    if (appointmentForm) appointmentForm.reset();
    hidePatientInfo();
    currentPatient = null;
    
    // Restablecer valores predeterminados
    if (dateInput) dateInput.value = formatDate(new Date());
    clearTimeSlots();
    if (doctorSelect) doctorSelect.innerHTML = '<option value="">Primero seleccione especialidad</option>';
    
    // Actualizar dashboard si está visible
    updateUpcomingAppointments();
    updateDashboardStats();
}
    
    function validateAppointmentForm() {
        const specialty = specialtySelect?.value;
        const doctor = doctorSelect?.value;
        const date = dateInput?.value;
        const time = timeSelect?.value;
        
        if (!specialty) {
            showNotification('Por favor, seleccione una especialidad', 'warning');
            return false;
        }
        
        if (!doctor) {
            showNotification('Por favor, seleccione un médico', 'warning');
            return false;
        }
        
        if (!date) {
            showNotification('Por favor, seleccione una fecha', 'warning');
            return false;
        }
        
        if (!time) {
            showNotification('Por favor, seleccione una hora', 'warning');
            return false;
        }
        
        return true;
    }
}

function refreshNewAppointment() {
    console.log('Refrescando Nueva Cita...');
    
    // Restablecer fecha actual
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
        dateInput.value = formatDate(new Date());
    }
    
    // Limpiar formulario si existe información previa
    const patientIdInput = document.getElementById('patient-id');
    if (patientIdInput) {
        patientIdInput.value = '';
    }
    
    const patientInfoContainer = document.getElementById('patient-info-container');
    if (patientInfoContainer) {
        patientInfoContainer.classList.add('hidden');
    }
    
    currentPatient = null;
}

// ===== CITAS PROGRAMADAS =====
function initializeAppointmentList() {
    console.log('Inicializando Lista de Citas...');
    
    const filterDateInput = document.getElementById('filter-date');
    const filterDoctorSelect = document.getElementById('filter-doctor');
    const filterSpecialtySelect = document.getElementById('filter-specialty');
    const filterStatusSelect = document.getElementById('filter-status');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const prevWeekBtn = document.getElementById('prev-week');
    const nextWeekBtn = document.getElementById('next-week');
    
    // Cargar médicos en el filtro
    populateDoctorFilter(filterDoctorSelect);
    
    // Establecer fecha actual en el filtro
    if (filterDateInput) {
        filterDateInput.value = formatDate(currentDate);
    }
    
    // Cargar datos iniciales
    updateCalendarView();
    updateAppointmentsTable();
    
    // Event Listeners
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', updateAppointmentsTable);
    }
    
    if (prevWeekBtn) {
        prevWeekBtn.addEventListener('click', () => {
            currentWeekStart.setDate(currentWeekStart.getDate() - 7);
            updateCalendarView();
        });
    }
    
    if (nextWeekBtn) {
        nextWeekBtn.addEventListener('click', () => {
            currentWeekStart.setDate(currentWeekStart.getDate() + 7);
            updateCalendarView();
        });
    }
    
    function populateDoctorFilter(selectElement) {
        if (!selectElement) return;
        
        selectElement.innerHTML = '<option value="">Todos los médicos</option>';
        
        mockData.doctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = doctor.name;
            selectElement.appendChild(option);
        });
    }
    
    function updateCalendarView() {
    const calendarGrid = document.getElementById('appointment-calendar-grid');
    const calendarTitle = document.getElementById('calendar-title');
    
    if (!calendarGrid || !calendarTitle) return;
    
    calendarGrid.innerHTML = '';
    
    // Actualizar título del calendario
    const weekEnd = new Date(currentWeekStart);
    weekEnd.setDate(currentWeekStart.getDate() + 6);
    
    calendarTitle.textContent = `Semana del ${formatDateDisplay(formatDate(currentWeekStart))} al ${formatDateDisplay(formatDate(weekEnd))}`;
    
    // Crear encabezados de días
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Crear celdas de días con citas
    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(currentWeekStart);
        dayDate.setDate(currentWeekStart.getDate() + i);
        const dateStr = formatDate(dayDate);
        
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        
        // Agregar fecha
        const dateHeader = document.createElement('div');
        dateHeader.className = 'date-header';
        dateHeader.textContent = dayDate.getDate();
        
        // Marcar día actual
        if (formatDate(currentDate) === dateStr) {
            dateHeader.classList.add('current-day');
        }
        
        dayCell.appendChild(dateHeader);
        
        // Filtrar citas para este día
        const dayAppointments = mockData.appointments.filter(app => app.date === dateStr);
        
        // Agregar conteo de citas
        const countBadge = document.createElement('div');
        countBadge.className = 'appointment-count';
        countBadge.textContent = dayAppointments.length + ' citas';
        dayCell.appendChild(countBadge);
        
        // Mostrar primeras 3 citas
        dayAppointments.slice(0, 3).forEach(app => {
            const appItem = document.createElement('div');
            appItem.className = `appointment-item status-${app.status}`;
            
            const patient = mockData.patients.find(p => p.id === app.patientId);
            const doctor = mockData.doctors.find(d => d.id === app.doctorId);
            
            if (patient && doctor) {
                appItem.innerHTML = `
                    <span class="appointment-time">${app.time}</span>
                    <span class="appointment-patient">${patient.name}</span>
                    <span class="appointment-doctor">${doctor.name}</span>
                `;
                dayCell.appendChild(appItem);
            }
        });
        
        // Indicador de más citas
        if (dayAppointments.length > 3) {
            const moreIndicator = document.createElement('div');
            moreIndicator.className = 'more-appointments';
            moreIndicator.textContent = `+ ${dayAppointments.length - 3} más`;
            dayCell.appendChild(moreIndicator);
        }
        
        calendarGrid.appendChild(dayCell);
    }
}
    
    function updateAppointmentsTable() {
        const appointmentsTable = document.getElementById('appointments-table');
        if (!appointmentsTable) return;
        
        appointmentsTable.innerHTML = '';
        
        // Obtener valores de filtros
        const dateFilter = filterDateInput?.value;
        const doctorFilter = filterDoctorSelect?.value ? parseInt(filterDoctorSelect.value) : null;
        const specialtyFilter = filterSpecialtySelect?.value;
        const statusFilter = filterStatusSelect?.value;
        
        // Filtrar citas
        let filteredAppointments = [...mockData.appointments];
        
        if (dateFilter) {
            filteredAppointments = filteredAppointments.filter(app => app.date === dateFilter);
        }
        
        if (doctorFilter) {
            filteredAppointments = filteredAppointments.filter(app => app.doctorId === doctorFilter);
        }
        
        if (specialtyFilter) {
            filteredAppointments = filteredAppointments.filter(app => app.specialty === specialtyFilter);
        }
        
        if (statusFilter) {
            filteredAppointments = filteredAppointments.filter(app => app.status === statusFilter);
        }
        
        // Ordenar por fecha y hora
        filteredAppointments.sort((a, b) => {
            const dateComparison = a.date.localeCompare(b.date);
            if (dateComparison !== 0) return dateComparison;
            return a.time.localeCompare(b.time);
        });
        
        // Mostrar resultados
        filteredAppointments.forEach(appointment => {
            const patient = mockData.patients.find(p => p.id === appointment.patientId);
            const doctor = mockData.doctors.find(d => d.id === appointment.doctorId);
            
            if (patient && doctor) {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${formatDateDisplay(appointment.date)}</td>
                    <td>${appointment.time}</td>
                    <td>${patient.name}</td>
                    <td>${doctor.name}</td>
                    <td>${getSpecialtyName(appointment.specialty)}</td>
                    <td>${getAppointmentTypeName(appointment.type)}</td>
                    <td><span class="status-${appointment.status}">${getStatusName(appointment.status)}</span></td>
                    <td>
                        <button class="action-button edit-btn" data-action="edit" data-id="${appointment.id}" title="Editar"><i class="fas fa-edit"></i></button>
                        <button class="action-button cancel-btn" data-action="cancel" data-id="${appointment.id}" title="Cancelar"><i class="fas fa-times"></i></button>
                        <button class="action-button complete-btn" data-action="complete" data-id="${appointment.id}" title="Completar"><i class="fas fa-check"></i></button>
                    </td>
                `;
                
                appointmentsTable.appendChild(row);
            }
        });
        
        // Agregar eventos a los botones de acción
        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', handleAppointmentAction);
        });
        
        // Mostrar mensaje si no hay resultados
        if (filteredAppointments.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="8" style="text-align: center;">No se encontraron citas con los filtros seleccionados</td>';
            appointmentsTable.appendChild(row);
        }
        
        console.log(`Mostrando ${filteredAppointments.length} citas`);
    }
    
    function handleAppointmentAction(e) {
        const action = e.currentTarget.getAttribute('data-action');
        const appointmentId = parseInt(e.currentTarget.getAttribute('data-id'));
        
        const appointmentIndex = mockData.appointments.findIndex(app => app.id === appointmentId);
        
        if (appointmentIndex === -1) return;
        
        const appointment = mockData.appointments[appointmentIndex];
        const patient = mockData.patients.find(p => p.id === appointment.patientId);
        
        switch (action) {
            case 'edit':
                showNotification(`Editando cita de ${patient?.name || 'Paciente desconocido'}`, 'info', 2000);
                break;
                
            case 'cancel':
                if (confirm(`¿Está seguro de cancelar la cita de ${patient?.name || 'este paciente'}?`)) {
                    mockData.appointments[appointmentIndex].status = 'canceled';
                    updateAppointmentsTable();
                    showNotification('Cita cancelada correctamente', 'success');
                }
                break;
                
            case 'complete':
                mockData.appointments[appointmentIndex].status = 'completed';
                updateAppointmentsTable();
                showNotification('Cita marcada como completada', 'success');
                break;
        }
    }
}

function refreshAppointmentList() {
    console.log('Refrescando Lista de Citas...');
    updateCalendarView();
    updateAppointmentsTable();
}

// ===== AGENDA DE MÉDICOS =====
function initializeDoctorSchedule() {
    console.log('Inicializando Agenda de Médicos...');
    
    const doctorSelect = document.getElementById('doctor-select');
    const doctorDateInput = document.getElementById('doctor-date');
    const viewScheduleBtn = document.getElementById('view-schedule');
    const availabilityStatusSelect = document.getElementById('availability-status');
    const partialHoursDiv = document.getElementById('partial-hours');
    const updateAvailabilityBtn = document.getElementById('update-availability');
    
    // Poblar select de médicos
    populateDoctorSelect();
    
    // Establecer fecha actual
    if (doctorDateInput) {
        doctorDateInput.value = formatDate(currentDate);
    }
    
    // Cargar agenda por defecto
    loadDoctorSchedule();
    
    // Event Listeners
    if (viewScheduleBtn) {
        viewScheduleBtn.addEventListener('click', loadDoctorSchedule);
    }
    
    if (availabilityStatusSelect) {
    availabilityStatusSelect.addEventListener('change', () => {
        if (availabilityStatusSelect.value === 'partial') {
            if (partialHoursDiv) partialHoursDiv.style.display = 'flex';
            populateTimeSelects();
        } else {
            if (partialHoursDiv) partialHoursDiv.style.display = 'none';
        }
    });
}
    
    if (updateAvailabilityBtn) {
        updateAvailabilityBtn.addEventListener('click', updateDoctorAvailability);
    }
    
    function populateDoctorSelect() {
        if (!doctorSelect) return;
        
        doctorSelect.innerHTML = '<option value="">Seleccione un médico</option>';
        
        mockData.doctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = `${doctor.name} - ${getSpecialtyName(doctor.specialty)}`;
            doctorSelect.appendChild(option);
        });
        
        // Seleccionar primer médico por defecto
        if (mockData.doctors.length > 0) {
            doctorSelect.value = mockData.doctors[0].id;
        }
    }
    
    function populateTimeSelects() {
        const fromSelect = document.getElementById('available-from');
        const toSelect = document.getElementById('available-to');
        
        if (!fromSelect || !toSelect) return;
        
        fromSelect.innerHTML = '<option value="">Desde</option>';
        toSelect.innerHTML = '<option value="">Hasta</option>';
        
        mockData.timeSlots.forEach(slot => {
            const fromOption = document.createElement('option');
            fromOption.value = slot;
            fromOption.textContent = slot;
            fromSelect.appendChild(fromOption);
            
            const toOption = document.createElement('option');
            toOption.value = slot;
            toOption.textContent = slot;
            toSelect.appendChild(toOption);
        });
    }
    
    function loadDoctorSchedule() {
        const doctorId = parseInt(doctorSelect?.value);
        const date = doctorDateInput?.value;
        
        if (!doctorId || !date) {
            showNotification('Por favor, seleccione un médico y una fecha', 'warning');
            return;
        }
        
        const doctor = mockData.doctors.find(d => d.id === doctorId);
        const doctorAppointments = mockData.appointments.filter(app => 
            app.doctorId === doctorId && app.date === date
        ).sort((a, b) => a.time.localeCompare(b.time));
        
        // Actualizar información del médico
        updateDoctorInfo(doctor, doctorAppointments);
        
        // Actualizar timeline
        updateDoctorTimeline(doctorAppointments);
        
        console.log(`Cargada agenda de ${doctor?.name} con ${doctorAppointments.length} citas`);
    }
    
    function updateDoctorInfo(doctor, appointments) {
        if (!doctor) return;
        
        const nameEl = document.getElementById('selected-doctor-name');
        const specialtyEl = document.getElementById('selected-doctor-specialty');
        const appointmentsEl = document.getElementById('selected-doctor-appointments');
        const occupationEl = document.getElementById('selected-doctor-occupation');
        
        if (nameEl) nameEl.textContent = doctor.name;
        if (specialtyEl) specialtyEl.textContent = getSpecialtyName(doctor.specialty);
        if (appointmentsEl) appointmentsEl.textContent = `${appointments.length}/12`;
        if (occupationEl) occupationEl.textContent = `${Math.round((appointments.length / 12) * 100)}%`;
    }
    
    function updateDoctorTimeline(appointments) {
        const doctorTimeline = document.getElementById('doctor-timeline');
        if (!doctorTimeline) return;
        
        doctorTimeline.innerHTML = '';
        
        mockData.timeSlots.forEach(slot => {
            const appointment = appointments.find(app => app.time === slot);
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            if (appointment) {
                const patient = mockData.patients.find(p => p.id === appointment.patientId);
                timelineItem.innerHTML = `
                    <div class="timeline-time">${slot}</div>
                    <div class="timeline-appointment">
                        <strong>${patient?.name || 'Paciente desconocido'}</strong><br>
                        <small>${getAppointmentTypeName(appointment.type)}</small><br>
                        <small>${appointment.notes}</small>
                    </div>
                    <div class="timeline-status">
                        <span class="status-${appointment.status}">${getStatusName(appointment.status)}</span>
                    </div>
                `;
                timelineItem.classList.add('occupied');
            } else {
                timelineItem.innerHTML = `
                    <div class="timeline-time">${slot}</div>
                    <div class="timeline-appointment">Disponible</div>
                    <div class="timeline-status">
                        <span class="status-available">Libre</span>
                    </div>
                `;
                timelineItem.classList.add('available');
            }
            
            doctorTimeline.appendChild(timelineItem);
        });
    }
    
    function updateDoctorAvailability() {
    const doctorId = parseInt(doctorSelect?.value);
    const date = document.getElementById('availability-date')?.value;
    const status = availabilityStatusSelect?.value;
    const reason = document.getElementById('availability-reason')?.value;
    
    if (!doctorId || !date || !status) {
        showNotification('Por favor, complete todos los campos requeridos', 'warning');
        return;
    }
    
    // Validación adicional para disponibilidad parcial
    if (status === 'partial') {
        const fromTime = document.getElementById('available-from')?.value;
        const toTime = document.getElementById('available-to')?.value;
        
        if (!fromTime || !toTime) {
            showNotification('Por favor, seleccione las horas de inicio y fin para disponibilidad parcial', 'warning');
            return;
        }
        
        if (fromTime >= toTime) {
            showNotification('La hora de inicio debe ser anterior a la hora de fin', 'warning');
            return;
        }
    }
    
    // Obtener información del médico
    const doctor = mockData.doctors.find(d => d.id === doctorId);
    const doctorName = doctor ? doctor.name : 'Médico desconocido';
    
    // Crear registro de disponibilidad
    const availabilityRecord = {
        doctorId: doctorId,
        doctorName: doctorName,
        date: date,
        status: status,
        reason: reason || null,
        fromTime: status === 'partial' ? document.getElementById('available-from')?.value : null,
        toTime: status === 'partial' ? document.getElementById('available-to')?.value : null,
        updatedAt: new Date().toISOString()
    };
    
    // Inicializar array de disponibilidad si no existe
    if (!mockData.availability) {
        mockData.availability = [];
    }
    
    // Buscar si ya existe un registro para este médico y fecha
    const existingIndex = mockData.availability.findIndex(
        record => record.doctorId === doctorId && record.date === date
    );
    
    if (existingIndex !== -1) {
        // Actualizar registro existente
        mockData.availability[existingIndex] = availabilityRecord;
    } else {
        // Agregar nuevo registro
        mockData.availability.push(availabilityRecord);
    }
    
    // Construir mensaje de confirmación
    let message = `Disponibilidad actualizada para <strong>${doctorName}</strong> el ${formatDateDisplay(date)}<br>`;
    
    switch (status) {
        case 'available':
            message += '<strong>Estado:</strong> Disponible todo el día';
            break;
        case 'unavailable':
            message += `<strong>Estado:</strong> No disponible${reason ? '<br><strong>Motivo:</strong> ' + reason : ''}`;
            break;
        case 'partial':
            const fromTime = document.getElementById('available-from')?.value;
            const toTime = document.getElementById('available-to')?.value;
            message += `<strong>Estado:</strong> Disponible de ${fromTime} a ${toTime}`;
            break;
    }
    
    showNotification(message, 'success', 4000);
    
    // Limpiar formulario
    const availabilityDateEl = document.getElementById('availability-date');
    const reasonEl = document.getElementById('availability-reason');
    const fromTimeEl = document.getElementById('available-from');
    const toTimeEl = document.getElementById('available-to');
    
    if (availabilityDateEl) availabilityDateEl.value = '';
    if (availabilityStatusSelect) availabilityStatusSelect.value = 'available';
    if (reasonEl) reasonEl.value = '';
    if (fromTimeEl) fromTimeEl.value = '';
    if (toTimeEl) toTimeEl.value = '';
    if (partialHoursDiv) partialHoursDiv.style.display = 'none';
    
    // Recargar la agenda si está mostrando la misma fecha
    const currentViewDate = document.getElementById('doctor-date')?.value;
    if (currentViewDate === date) {
        loadDoctorSchedule();
    }
    
    console.log('Registro de disponibilidad guardado:', availabilityRecord);
}
}

// Función para obtener la disponibilidad de un médico en una fecha específica
function getDoctorAvailability(doctorId, date) {
    if (!mockData.availability) return null;
    
    return mockData.availability.find(
        record => record.doctorId === doctorId && record.date === date
    );
}

function refreshDoctorSchedule() {
    console.log('Refrescando Agenda de Médicos...');
    
    const doctorDateInput = document.getElementById('doctor-date');
    if (doctorDateInput) {
        doctorDateInput.value = formatDate(currentDate);
    }
    
    // Recargar la agenda actual
    const viewScheduleBtn = document.getElementById('view-schedule');
    if (viewScheduleBtn) {
        viewScheduleBtn.click();
    }
}

// ===== GESTIÓN DE PACIENTES =====
function initializePatientManagement() {
    console.log('Inicializando Gestión de Pacientes...');
    
    const searchInput = document.getElementById('patient-search-input');
    const searchBtn = document.getElementById('patient-search-button');
    const addPatientBtn = document.getElementById('add-new-patient');
    const patientModal = document.getElementById('patient-modal');
    const patientForm = document.getElementById('patient-form');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelFormBtn = document.getElementById('cancel-patient-form');
    
    let currentEditingPatient = null;
    
    // Cargar lista de pacientes
    loadPatientsTable();
    
    // Event Listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', searchPatients);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchPatients();
            }
        });
    }
    
    if (addPatientBtn) {
        addPatientBtn.addEventListener('click', () => {
            openPatientModal();
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closePatientModal);
    }
    
    if (cancelFormBtn) {
        cancelFormBtn.addEventListener('click', closePatientModal);
    }
    
    if (patientForm) {
        patientForm.addEventListener('submit', savePatient);
    }
    
    // Cerrar modal al hacer clic fuera
    if (patientModal) {
        patientModal.addEventListener('click', (e) => {
            if (e.target === patientModal) {
                closePatientModal();
            }
        });
    }
    
    function loadPatientsTable(patientsToShow = mockData.patients) {
        const patientsTable = document.getElementById('patients-table');
        if (!patientsTable) return;
        
        patientsTable.innerHTML = '';
        
        patientsToShow.forEach(patient => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${calculateAge(patient.birthdate)} años</td>
                <td>${patient.phone}</td>
                <td>${patient.email || 'N/A'}</td>
                <td>${patient.lastVisit ? formatDateDisplay(patient.lastVisit) : 'Primera visita'}</td>
                <td>
                    <button class="action-button view-btn" data-action="view" data-id="${patient.id}" title="Ver"><i class="fas fa-eye"></i></button>
                    <button class="action-button edit-btn" data-action="edit" data-id="${patient.id}" title="Editar"><i class="fas fa-edit"></i></button>
                    <button class="action-button delete-btn" data-action="delete" data-id="${patient.id}" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
            `;
            
            patientsTable.appendChild(row);
        });
        
        // Agregar eventos a botones de acción
        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', handlePatientAction);
        });
        
        if (patientsToShow.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="7" style="text-align: center;">No se encontraron pacientes</td>';
            patientsTable.appendChild(row);
        }
        
        console.log(`Mostrando ${patientsToShow.length} pacientes`);
    }
    
    function searchPatients() {
        const searchTerm = searchInput?.value.trim().toLowerCase();
        
        if (!searchTerm) {
            loadPatientsTable();
            return;
        }
        
        const filteredPatients = mockData.patients.filter(patient => 
            patient.name.toLowerCase().includes(searchTerm) ||
            patient.id.toLowerCase().includes(searchTerm) ||
            patient.phone.includes(searchTerm) ||
            (patient.email && patient.email.toLowerCase().includes(searchTerm))
        );
        
        loadPatientsTable(filteredPatients);
        console.log(`Búsqueda: ${filteredPatients.length} pacientes encontrados`);
    }
    
    function openPatientModal(patient = null) {
    const patientModal = document.getElementById('patient-modal');
    if (!patientModal) return;
    
    const modalTitle = document.getElementById('patient-modal-title');
    const patientForm = document.getElementById('patient-form');
    
    if (patient) {
        if (modalTitle) modalTitle.textContent = 'Editar Paciente';
        fillPatientForm(patient);
    } else {
        if (modalTitle) modalTitle.textContent = 'Nuevo Paciente';
        if (patientForm) patientForm.reset();
        const idField = document.getElementById('patient-form-id');
        if (idField) idField.value = nextPatientId;
    }
    
    patientModal.style.display = 'flex';
}

    
    function closePatientModal() {
        if (patientModal) {
            patientModal.style.display = 'none';
        }
        currentEditingPatient = null;
        if (patientForm) patientForm.reset();
    }
    
    function fillPatientForm(patient) {
    if (!patient) return;
    
    const fields = {
        'patient-form-id': patient.id,
        'patient-form-name': patient.name,
        'patient-form-birthdate': patient.birthdate,
        'patient-form-gender': patient.gender,
        'patient-form-phone': patient.phone,
        'patient-form-email': patient.email || '',
        'patient-form-address': patient.address || '',
        'patient-form-notes': patient.notes || ''
    };
    
    Object.entries(fields).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field) field.value = value;
    });
}
    
    function savePatient(e) {
        e.preventDefault();
        
        const patientData = {
            id: document.getElementById('patient-form-id')?.value,
            name: document.getElementById('patient-form-name')?.value,
            birthdate: document.getElementById('patient-form-birthdate')?.value,
            gender: document.getElementById('patient-form-gender')?.value,
            phone: document.getElementById('patient-form-phone')?.value,
            email: document.getElementById('patient-form-email')?.value,
            address: document.getElementById('patient-form-address')?.value,
            notes: document.getElementById('patient-form-notes')?.value,
            lastVisit: currentEditingPatient ? currentEditingPatient.lastVisit : null
        };
        
        // Validación básica
        if (!patientData.name || !patientData.birthdate || !patientData.phone) {
            showNotification('Por favor, complete los campos obligatorios', 'warning');
            return;
        }
        
        if (currentEditingPatient) {
            // Editar paciente existente
            const patientIndex = mockData.patients.findIndex(p => p.id === currentEditingPatient.id);
            if (patientIndex !== -1) {
                mockData.patients[patientIndex] = patientData;
                showNotification('Paciente actualizado correctamente', 'success');
            }
        } else {
            // Agregar nuevo paciente
            mockData.patients.push(patientData);
            nextPatientId = "P" + String(parseInt(nextPatientId.substring(1)) + 1).padStart(3, '0');
            showNotification('Paciente agregado correctamente', 'success');
        }
        
        loadPatientsTable();
        closePatientModal();
    }
    
    function handlePatientAction(e) {
    const action = e.currentTarget.getAttribute('data-action');
    const patientId = e.currentTarget.getAttribute('data-id');
    const patient = mockData.patients.find(p => p.id === patientId);
    
    if (!patient) return;
    
    switch (action) {
        case 'view':
            showNotification(`Mostrando información de ${patient.name}`, 'info', 2000);
            break;
            
        case 'edit':
            openPatientModal(patient);
            break;
            
        case 'delete':
            if (confirm(`¿Está seguro de eliminar al paciente ${patient.name}?`)) {
                const patientIndex = mockData.patients.findIndex(p => p.id === patientId);
                if (patientIndex !== -1) {
                    mockData.patients.splice(patientIndex, 1);
                    refreshPatientManagement();
                    showNotification('Paciente eliminado correctamente', 'success');
                }
            }
            break;
    }
    }
}
function refreshPatientManagement() {
    console.log('Refrescando Gestión de Pacientes...');
    
    const searchInput = document.getElementById('patient-search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Recargar tabla de pacientes
    const patientsTable = document.getElementById('patients-table');
    if (patientsTable) {
        patientsTable.innerHTML = '';
        
        mockData.patients.forEach(patient => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${calculateAge(patient.birthdate)} años</td>
                <td>${patient.phone}</td>
                <td>${patient.email || 'N/A'}</td>
                <td>${patient.lastVisit ? formatDateDisplay(patient.lastVisit) : 'Primera visita'}</td>
                <td>
                    <button class="action-button view-btn" data-action="view" data-id="${patient.id}" title="Ver"><i class="fas fa-eye"></i></button>
                    <button class="action-button edit-btn" data-action="edit" data-id="${patient.id}" title="Editar"><i class="fas fa-edit"></i></button>
                    <button class="action-button delete-btn" data-action="delete" data-id="${patient.id}" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
            `;
            
            patientsTable.appendChild(row);
        });
        
        // Reattach event listeners
        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', handlePatientAction);
        });
    }
}
mockData.trendStats
mockData.noShowStats
mockData.waitingStats
// ===== ESTADÍSTICAS =====
function initializeStatistics() {
    console.log('Inicializando Estadísticas...');
    
    const statsPeriodSelect = document.getElementById('stats-period');
    const statsSpecialtySelect = document.getElementById('stats-specialty');
    const updateStatsBtn = document.getElementById('update-stats');
    
    // Event Listeners
    if (updateStatsBtn) {
        updateStatsBtn.addEventListener('click', updateStatistics);
    }
    
    if (statsPeriodSelect) {
        statsPeriodSelect.addEventListener('change', updateStatistics);
    }
    
    if (statsSpecialtySelect) {
        statsSpecialtySelect.addEventListener('change', updateStatistics);
    }
    
    // Cargar estadísticas iniciales
    setTimeout(() => {
        updateStatistics();
    }, 500);
}
    
    function updateStatistics() {
    const statsPeriodSelect = document.getElementById('stats-period');
    const statsSpecialtySelect = document.getElementById('stats-specialty');
    
    const period = statsPeriodSelect?.value || 'month';
    const specialty = statsSpecialtySelect?.value || '';
    
    console.log(`Actualizando estadísticas: ${period}, ${specialty}`);
    
    // Actualizar métricas clave
    updateKeyMetrics(period, specialty);
    
    // Actualizar gráficos con delay para asegurar que los canvas estén listos
    setTimeout(() => {
        updateStatisticsCharts(period, specialty);
    }, 100);
    
    // Actualizar predicciones
    setTimeout(() => {
        updatePredictions();
    }, 200);
}
    
    function updateKeyMetrics(period, specialty) {
    // Calcular métricas basadas en filtros
    let totalAppointments = mockData.appointments.length;
    let attendanceRate = 86.5;
    let avgWaitingTime = 16.8;
    let patientSatisfaction = 4.7;
    
    // Aplicar filtros si es necesario
    if (specialty) {
        const filteredApps = mockData.appointments.filter(app => app.specialty === specialty);
        totalAppointments = filteredApps.length;
    }
    
    // Simular variaciones por período
    switch (period) {
        case 'week':
            totalAppointments = Math.round(totalAppointments * 0.25);
            break;
        case 'quarter':
            totalAppointments = Math.round(totalAppointments * 3);
            break;
        case 'year':
            totalAppointments = Math.round(totalAppointments * 12);
            break;
    }
    
    // Actualizar valores en el DOM
    const totalEl = document.getElementById('total-appointments');
    const attendanceEl = document.getElementById('attendance-rate-value');
    const waitingEl = document.getElementById('avg-waiting-time');
    const satisfactionEl = document.getElementById('patient-satisfaction');
    
    if (totalEl) totalEl.textContent = totalAppointments;
    if (attendanceEl) attendanceEl.textContent = attendanceRate + '%';
    if (waitingEl) waitingEl.textContent = avgWaitingTime + ' min';
    if (satisfactionEl) satisfactionEl.textContent = patientSatisfaction + '/5';
    
    console.log('Métricas actualizadas:', { totalAppointments, attendanceRate, avgWaitingTime, patientSatisfaction });
}
    
   // En el archivo script.js, agregar estas funciones mejoradas

function updateStatisticsCharts(period, specialty) {
    console.log('Actualizando gráficos de estadísticas...');
    
    // Gráfico de especialidades
    updateSpecialtyChart(specialty);
    
    // Gráfico de tendencias
    updateTrendChart(period);
    
    // Gráfico de inasistencias
    updateNoShowChart(period);
    
    // Gráfico de tiempo de espera
    updateWaitingChart(period);
}
    
    function updateSpecialtyChart(selectedSpecialty) {
    const ctx = document.getElementById('stats-specialty-chart');
    if (!ctx) {
        console.error('Canvas stats-specialty-chart no encontrado');
        return;
    }
    
    // Destruir gráfico existente si existe
    if (charts.specialtyStats) {
        charts.specialtyStats.destroy();
    }
    
    let data = { ...mockData.specialtyStats };
    let labels = Object.keys(data).map(getSpecialtyName);
    let values = Object.values(data);
    
    if (selectedSpecialty && data[selectedSpecialty]) {
        labels = [getSpecialtyName(selectedSpecialty)];
        values = [data[selectedSpecialty]];
    }
    
    try {
        charts.specialtyStats = new Chart(ctx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: [
                        '#3498db',
                        '#2ecc71', 
                        '#e74c3c',
                        '#f39c12',
                        '#9b59b6'
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} citas (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
        console.log('Gráfico de especialidades creado exitosamente');
    } catch (error) {
        console.error('Error al crear gráfico de especialidades:', error);
    }
}


    
    function updateTrendChart(period) {
    const ctx = document.getElementById('stats-trend-chart');
    if (!ctx) {
        console.error('Canvas stats-trend-chart no encontrado');
        return;
    }
    
    // Destruir gráfico existente si existe
    if (charts.trendStats) {
        charts.trendStats.destroy();
    }
    
    const data = mockData.trendStats[period] || mockData.trendStats.month;
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    try {
        charts.trendStats = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Citas por período',
                    data: values,
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderColor: '#3498db',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: { 
                        title: { 
                            display: true, 
                            text: 'Período' 
                        }
                    },
                    y: { 
                        title: { 
                            display: true, 
                            text: 'Cantidad de citas' 
                        },
                        beginAtZero: true
                    }
                }
            }
        });
        console.log('Gráfico de tendencias creado exitosamente');
    } catch (error) {
        console.error('Error al crear gráfico de tendencias:', error);
    }
}
    function updateNoShowChart(period) {
    const ctx = document.getElementById('stats-noshow-chart');
    if (!ctx) {
        console.error('Canvas stats-noshow-chart no encontrado');
        return;
    }
    
    if (charts.noShowStats) {
        charts.noShowStats.destroy();
    }
    
    const data = mockData.noShowStats[period];
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    try {
        charts.noShowStats = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Inasistencias',
                    data: values,
                    backgroundColor: '#e74c3c'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
        console.log('Gráfico de inasistencias creado exitosamente');
    } catch (error) {
        console.error('Error al crear gráfico de inasistencias:', error);
    }
}

    function updateWaitingChart(period) {
    const ctx = document.getElementById('stats-waiting-chart');
    if (!ctx) {
        console.error('Canvas stats-waiting-chart no encontrado');
        return;
    }
    
    if (charts.waitingStats) {
        charts.waitingStats.destroy();
    }
    
    const data = mockData.waitingStats[period];
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    try {
        charts.waitingStats = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tiempo de espera (min)',
                    data: values,
                    backgroundColor: '#f39c12'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
        console.log('Gráfico de tiempo de espera creado exitosamente');
    } catch (error) {
        console.error('Error al crear gráfico de tiempo de espera:', error);
    }
}


    function updatePredictions() {
    console.log('Actualizando predicciones...');
    
    // Gráfico de predicción de demanda
    const demandCtx = document.getElementById('demand-prediction-chart');
    if (demandCtx) {
        if (charts.demandPrediction) {
            charts.demandPrediction.destroy();
        }
        
        try {
            charts.demandPrediction = new Chart(demandCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
                    datasets: [
                        {
                            label: 'Demanda Actual',
                            data: [25, 28, 22, 30, 26, 18, 12],
                            borderColor: '#3498db',
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Predicción',
                            data: [28, 32, 25, 35, 30, 20, 15],
                            borderColor: '#e74c3c',
                            backgroundColor: 'rgba(231, 76, 60, 0.1)',
                            borderDash: [5, 5],
                            fill: true,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'top' }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
            console.log('Gráfico de predicción de demanda creado exitosamente');
        } catch (error) {
            console.error('Error al crear gráfico de predicción:', error);
        }
    }
    
    // Actualizar recomendaciones del sistema
    const recommendationsEl = document.getElementById('system-recommendations');
    if (recommendationsEl) {
        const recommendations = [
            'Aumentar capacidad en Traumatología los días lunes (+15%)',
            'Reducir intervalo entre citas de Medicina General de 20 a 18 minutos',
            'Implementar recordatorios adicionales para pacientes de Dermatología',
            'Considerar médico adicional para Pediatría en horario vespertino'
        ];
        
        recommendationsEl.innerHTML = recommendations.map(rec => `<li>${rec}</li>`).join('');
    }
}
function refreshStatistics() {
    console.log('Refrescando Estadísticas...');
    
    // Pequeño delay para asegurar que la sección esté visible
    setTimeout(() => {
        updateStatistics();
    }, 300);
}

// Agregar datos faltantes a mockData
mockData.trendStats = {
    week: {
        'Lun': 25,
        'Mar': 28,
        'Mié': 22,
        'Jue': 30,
        'Vie': 26,
        'Sáb': 18,
        'Dom': 12
    },
    month: {
        'Sem 1': 120,
        'Sem 2': 135,
        'Sem 3': 128,
        'Sem 4': 142
    },
    quarter: {
        'Ene': 450,
        'Feb': 420,
        'Mar': 480
    },
    year: {
        '2023': 5200,
        '2024': 5800,
        '2025': 4200
    }
};

mockData.noShowStats = {
    week: {
        'Lun': 3,
        'Mar': 2,
        'Mié': 4,
        'Jue': 2,
        'Vie': 3,
        'Sáb': 1,
        'Dom': 1
    },
    month: {
        'Sem 1': 12,
        'Sem 2': 15,
        'Sem 3': 11,
        'Sem 4': 18
    },
    quarter: {
        'Ene': 45,
        'Feb': 38,
        'Mar': 52
    },
    year: {
        '2023': 520,
        '2024': 480,
        '2025': 320
    }
};

mockData.waitingStats = {
    week: {
        'Lun': 18,
        'Mar': 15,
        'Mié': 22,
        'Jue': 17,
        'Vie': 20,
        'Sáb': 12,
        'Dom': 10
    },
    month: {
        'Sem 1': 16,
        'Sem 2': 18,
        'Sem 3': 17,
        'Sem 4': 19
    },
    quarter: {
        'Ene': 17.5,
        'Feb': 16.2,
        'Mar': 18.8
    },
    year: {
        '2023': 19.2,
        '2024': 17.8,
        '2025': 16.8
    }
};

// Completar función refreshStatistics
function refreshStatistics() {
    console.log('Refrescando Estadísticas...');
    
    const period = document.getElementById('stats-period')?.value || 'month';
    const specialty = document.getElementById('stats-specialty')?.value || '';
    
    updateKeyMetrics(period, specialty);
    updateStatisticsCharts(period, specialty);
    updatePredictions();
}

// Función para actualizar predicciones completa
function updatePredictions() {
    const demandCtx = document.getElementById('demand-prediction-chart');
    if (demandCtx) {
        if (charts.demandPrediction) {
            charts.demandPrediction.destroy();
        }
        
        charts.demandPrediction = new Chart(demandCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
                datasets: [
                    {
                        label: 'Demanda Actual',
                        data: [25, 28, 22, 30, 26, 18, 12],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        fill: true
                    },
                    {
                        label: 'Predicción',
                        data: [28, 32, 25, 35, 30, 20, 15],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        borderDash: [5, 5],
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
}

// Corregir función updateNoShowChart
function updateNoShowChart(period) {
    const ctx = document.getElementById('stats-noshow-chart'); // Corregir ID
    if (!ctx) return;
    
    if (charts.noShowStats) {
        charts.noShowStats.destroy();
    }
    
    const data = mockData.noShowStats[period];
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    charts.noShowStats = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Inasistencias',
                data: values,
                backgroundColor: '#e74c3c'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Corregir función updateWaitingChart
function updateWaitingChart(period) {
    const ctx = document.getElementById('stats-waiting-chart');
    if (!ctx) return;
    
    if (charts.waitingStats) {
        charts.waitingStats.destroy();
    }
    
    const data = mockData.waitingStats[period];
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    charts.waitingStats = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tiempo de espera (min)',
                data: values,
                backgroundColor: '#f39c12'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Función para manejar acciones de pacientes (faltaba en refreshPatientManagement)
function handlePatientAction(e) {
    const action = e.currentTarget.getAttribute('data-action');
    const patientId = e.currentTarget.getAttribute('data-id');
    const patient = mockData.patients.find(p => p.id === patientId);
    
    if (!patient) return;
    
    switch (action) {
        case 'view':
            showNotification(`Mostrando información de ${patient.name}`, 'info', 2000);
            break;
            
        case 'edit':
            openPatientModal(patient);
            break;
            
        case 'delete':
            if (confirm(`¿Está seguro de eliminar al paciente ${patient.name}?`)) {
                const patientIndex = mockData.patients.findIndex(p => p.id === patientId);
                if (patientIndex !== -1) {
                    mockData.patients.splice(patientIndex, 1);
                    refreshPatientManagement();
                    showNotification('Paciente eliminado correctamente', 'success');
                }
            }
            break;
    }
}

// Función para abrir modal de paciente (faltaba en refreshPatientManagement)
function openPatientModal(patient = null) {
    const patientModal = document.getElementById('patient-modal');
    if (!patientModal) return;
    
    const modalTitle = document.getElementById('patient-modal-title');
    const patientForm = document.getElementById('patient-form');
    
    if (patient) {
        if (modalTitle) modalTitle.textContent = 'Editar Paciente';
        fillPatientForm(patient);
    } else {
        if (modalTitle) modalTitle.textContent = 'Nuevo Paciente';
        if (patientForm) patientForm.reset();
        const idField = document.getElementById('patient-form-id');
        if (idField) idField.value = nextPatientId;
    }
    
    patientModal.style.display = 'flex';
}

// Función auxiliar para llenar formulario de paciente
function fillPatientForm(patient) {
    if (!patient) return;
    
    const fields = {
        'patient-form-id': patient.id,
        'patient-form-name': patient.name,
        'patient-form-birthdate': patient.birthdate,
        'patient-form-gender': patient.gender,
        'patient-form-phone': patient.phone,
        'patient-form-email': patient.email || '',
        'patient-form-address': patient.address || '',
        'patient-form-notes': patient.notes || ''
    };
    
    Object.entries(fields).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field) field.value = value;
    });
}

// FUNCIONES AUXILIARES COMPLETAS
function formatDate(date) {
    if (typeof date === 'string') return date;
    return date.toISOString().split('T')[0];
}

function formatDateDisplay(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('es-ES', options);
}

function calculateAge(birthdate) {
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function getSpecialtyName(specialty) {
    const specialties = {
        'general': 'Medicina General',
        'pediatria': 'Pediatría',
        'ginecologia': 'Ginecología',
        'traumatologia': 'Traumatología',
        'dermatologia': 'Dermatología'
    };
    return specialties[specialty] || specialty;
}

function getStatusName(status) {
    const statuses = {
        'scheduled': 'Programada',
        'confirmed': 'Confirmada',
        'completed': 'Completada',
        'canceled': 'Cancelada',
        'noshow': 'No asistió'
    };
    return statuses[status] || status;
}

function getAppointmentTypeName(type) {
    const types = {
        'routine': 'Rutina',
        'followup': 'Seguimiento',
        'urgent': 'Urgencia',
        'labresults': 'Resultados'
    };
    return types[type] || type;
}

function getPriorityFromType(type) {
    const priorities = {
        'urgent': 'high',
        'followup': 'normal',
        'routine': 'normal',
        'labresults': 'normal'
    };
    return priorities[type] || 'normal';
}

function getPriorityName(priority) {
    const names = {
        'high': 'Alta',
        'normal': 'Normal',
        'low': 'Baja'
    };
    return names[priority] || priority;
}

// Función para inicializar eventos de botones de acción después de cargar tablas
function attachActionButtonEvents() {
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.currentTarget.closest('section').id;
            
            if (section === 'patient-management') {
                handlePatientAction(e);
            } else if (section === 'appointment-list') {
                handleAppointmentAction(e);
            }
        });
    });
}

// Llamar esta función después de cargar cualquier tabla con botones de acción
function loadPatientsTable(patientsToShow = mockData.patients) {
    const patientsTable = document.getElementById('patients-table');
    if (!patientsTable) return;
    
    patientsTable.innerHTML = '';
    
    patientsToShow.forEach(patient => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${calculateAge(patient.birthdate)} años</td>
            <td>${patient.phone}</td>
            <td>${patient.email || 'N/A'}</td>
            <td>${patient.lastVisit ? formatDateDisplay(patient.lastVisit) : 'Primera visita'}</td>
            <td>
                <button class="action-button view-btn" data-action="view" data-id="${patient.id}" title="Ver"><i class="fas fa-eye"></i></button>
                <button class="action-button edit-btn" data-action="edit" data-id="${patient.id}" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="action-button delete-btn" data-action="delete" data-id="${patient.id}" title="Eliminar"><i class="fas fa-trash"></i></button>
            </td>
        `;
        
        patientsTable.appendChild(row);
    });
    
    // Reattach event listeners
    attachActionButtonEvents();
    
    if (patientsToShow.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="7" style="text-align: center;">No se encontraron pacientes</td>';
        patientsTable.appendChild(row);
    }
    
    console.log(`Mostrando ${patientsToShow.length} pacientes`);
}

function checkAndInitializeCharts() {
    const specialtyCanvas = document.getElementById('specialties-chart');
    
    if (specialtyCanvas && !charts.specialty) {
        console.log('Reintentando inicialización de gráficos...');
        initializeCharts();
    }
}

if (!mockData.trendStats) {
    mockData.trendStats = {
        week: {
            'Lun': 25, 'Mar': 28, 'Mié': 22, 'Jue': 30, 'Vie': 26, 'Sáb': 18, 'Dom': 12
        },
        month: {
            'Sem 1': 120, 'Sem 2': 135, 'Sem 3': 128, 'Sem 4': 142
        },
        quarter: {
            'Ene': 450, 'Feb': 420, 'Mar': 480
        },
        year: {
            '2023': 5200, '2024': 5800, '2025': 4200
        }
    };
}

if (!mockData.noShowStats) {
    mockData.noShowStats = {
        week: {
            'Lun': 3, 'Mar': 2, 'Mié': 4, 'Jue': 2, 'Vie': 3, 'Sáb': 1, 'Dom': 1
        },
        month: {
            'Sem 1': 12, 'Sem 2': 15, 'Sem 3': 11, 'Sem 4': 18
        },
        quarter: {
            'Ene': 45, 'Feb': 38, 'Mar': 52
        },
        year: {
            '2023': 520, '2024': 480, '2025': 320
        }
    };
}

if (!mockData.waitingStats) {
    mockData.waitingStats = {
        week: {
            'Lun': 18, 'Mar': 15, 'Mié': 22, 'Jue': 17, 'Vie': 20, 'Sáb': 12, 'Dom': 10
        },
        month: {
            'Sem 1': 16, 'Sem 2': 18, 'Sem 3': 17, 'Sem 4': 19
        },
        quarter: {
            'Ene': 17.5, 'Feb': 16.2, 'Mar': 18.8
        },
        year: {
            '2023': 19.2, '2024': 17.8, '2025': 16.8
        }
    };
}

mockData.trendStats = {
    week: {
        'Lun': 25, 'Mar': 28, 'Mié': 22, 'Jue': 30, 'Vie': 26, 'Sáb': 18, 'Dom': 12
    },
    month: {
        'Sem 1': 120, 'Sem 2': 135, 'Sem 3': 128, 'Sem 4': 142
    },
    quarter: {
        'Ene': 450, 'Feb': 420, 'Mar': 480
    },
    year: {
        '2023': 5200, '2024': 5800, '2025': 4200
    }
};

mockData.noShowStats = {
    week: {
        'Lun': 3, 'Mar': 2, 'Mié': 4, 'Jue': 2, 'Vie': 3, 'Sáb': 1, 'Dom': 1
    },
    month: {
        'Sem 1': 12, 'Sem 2': 15, 'Sem 3': 11, 'Sem 4': 18
    },
    quarter: {
        'Ene': 45, 'Feb': 38, 'Mar': 52
    },
    year: {
        '2023': 520, '2024': 480, '2025': 320
    }
};

mockData.waitingStats = {
    week: {
        'Lun': 18, 'Mar': 15, 'Mié': 22, 'Jue': 17, 'Vie': 20, 'Sáb': 12, 'Dom': 10
    },
    month: {
        'Sem 1': 16, 'Sem 2': 18, 'Sem 3': 17, 'Sem 4': 19
    },
    quarter: {
        'Ene': 17.5, 'Feb': 16.2, 'Mar': 18.8
    },
    year: {
        '2023': 19.2, '2024': 17.8, '2025': 16.8
    }
};

// Función para mostrar notificaciones
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
}
// Función para cerrar el modal de paciente
function closePatientModal() {
    const patientModal = document.getElementById('patient-modal');
    if (patientModal) {
        patientModal.style.display = 'none';
    }
}
// Función para cerrar el modal de cita
function closeAppointmentModal() {
    const appointmentModal = document.getElementById('appointment-modal');
    if (appointmentModal) {
        appointmentModal.style.display = 'none';
    }
}
// Función para mostrar el modal de cita
function showAppointmentModal() {
    const appointmentModal = document.getElementById('appointment-modal');
    if (appointmentModal) {
        appointmentModal.style.display = 'block';
    }
}