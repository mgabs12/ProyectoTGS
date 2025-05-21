// Initialize stat counters
document.getElementById('totalAppointments').textContent = '32';
document.getElementById('pendingAppointments').textContent = '12';
document.getElementById('confirmedAppointments').textContent = '16';
document.getElementById('cancelledAppointments').textContent = '4';

// Initialize chart
const ctx = document.getElementById('appointmentsChart').getContext('2d');
let appointmentsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
            {
                label: 'Programadas',
                data: [8, 10, 6, 9, 12, 4, 5],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Completadas',
                data: [6, 8, 5, 7, 10, 3, 4],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Canceladas',
                data: [2, 1, 1, 2, 1, 1, 1],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart data for different periods
const chartData = {
    daily: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
            { label: 'Programadas', data: [8, 10, 6, 9, 12, 4, 5], borderColor: '#2563eb' },
            { label: 'Completadas', data: [6, 8, 5, 7, 10, 3, 4], borderColor: '#10b981' },
            { label: 'Canceladas', data: [2, 1, 1, 2, 1, 1, 1], borderColor: '#ef4444' }
        ]
    },
    weekly: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
        datasets: [
            { label: 'Programadas', data: [45, 52, 38, 41], borderColor: '#2563eb' },
            { label: 'Completadas', data: [38, 44, 32, 35], borderColor: '#10b981' },
            { label: 'Canceladas', data: [7, 8, 6, 6], borderColor: '#ef4444' }
        ]
    },
    monthly: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
        datasets: [
            { label: 'Programadas', data: [180, 195, 165, 178, 176], borderColor: '#2563eb' },
            { label: 'Completadas', data: [155, 172, 142, 155, 149], borderColor: '#10b981' },
            { label: 'Canceladas', data: [25, 23, 23, 23, 27], borderColor: '#ef4444' }
        ]
    }
};

// Tab functionality for charts
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabType = this.dataset.tab;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Update chart data
        const newData = chartData[tabType];
        appointmentsChart.data.labels = newData.labels;
        appointmentsChart.data.datasets.forEach((dataset, index) => {
            dataset.data = newData.datasets[index].data;
            dataset.borderColor = newData.datasets[index].borderColor;
            dataset.backgroundColor = newData.datasets[index].borderColor.replace(')', ', 0.1)').replace('rgb', 'rgba');
        });
        appointmentsChart.update();
    });
});

// New appointment form
document.getElementById('newAppointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const doctorSelect = document.getElementById('doctorSelect');
    const doctorText = doctorSelect.options[doctorSelect.selectedIndex].text;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    
    // Check if the appointment is for today
    const today = new Date().toISOString().split('T')[0];
    const isToday = appointmentDate === today;
    
    if (isToday) {
        // Add new appointment to today's list
        const appointmentList = document.querySelector('.appointment-list');
        const newAppointment = document.createElement('div');
        newAppointment.className = 'appointment-item';
        newAppointment.innerHTML = `
            <div class="appointment-info">
                <div class="appointment-name">${patientName}</div>
                <div class="appointment-time">${appointmentTime} - ${doctorText.split(' - ')[0]}</div>
            </div>
            <span class="appointment-status status-pending">Pendiente</span>
        `;
        
        // Add click event to new appointment
        newAppointment.addEventListener('click', () => {
            modal.style.display = 'flex';
            // Update modal with new appointment data
            document.getElementById('modalPatientName').textContent = patientName;
            document.getElementById('modalDoctorName').textContent = doctorText.split(' - ')[0];
            document.getElementById('modalDateTime').textContent = `${appointmentDate} - ${appointmentTime}`;
            document.getElementById('modalStatus').textContent = 'Pendiente';
        });
        
        appointmentList.appendChild(newAppointment);
    }
    
    // Update stats
    const total = parseInt(document.getElementById('totalAppointments').textContent);
    const pending = parseInt(document.getElementById('pendingAppointments').textContent);
    document.getElementById('totalAppointments').textContent = total + 1;
    document.getElementById('pendingAppointments').textContent = pending + 1;
    
    alert('Cita registrada exitosamente');
    this.reset();
});

// Modal functionality
const modal = document.getElementById('appointmentModal');
const modalClose = document.querySelector('.modal-close');

// Close modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Modal tab functionality
document.querySelectorAll('.modal .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.dataset.tab;
        
        // Update active tab button
        document.querySelectorAll('.modal .tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName + '-tab').classList.add('active');
    });
});

// Click on appointment items to show modal
document.querySelectorAll('.appointment-item').forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        
        // Get appointment data from the clicked item
        const patientName = item.querySelector('.appointment-name').textContent;
        const timeAndDoctor = item.querySelector('.appointment-time').textContent;
        const status = item.querySelector('.appointment-status').textContent;
        
        // Update modal with appointment data
        document.getElementById('modalPatientName').textContent = patientName;
        document.getElementById('modalDoctorName').textContent = timeAndDoctor.split(' - ')[1];
        document.getElementById('modalDateTime').textContent = `${new Date().toLocaleDateString('es-ES')} - ${timeAndDoctor.split(' - ')[0]}`;
        document.getElementById('modalStatus').textContent = status;
    });
});

// Set minimum date to today for appointment form
document.getElementById('appointmentDate').min = new Date().toISOString().split('T')[0];

// Menu navigation functionality
document.querySelectorAll('.menu a, nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all menu items
        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get the section name from the link text
        const sectionName = this.textContent.trim();
        
        // Hide all sections and show the selected one
        showSection(sectionName);
    });
});

// Function to show different sections
function showSection(sectionName) {
    const mainContent = document.querySelector('.main-content');
    
    // Clear current content
    mainContent.innerHTML = '';
    
    switch(sectionName.toLowerCase()) {
        case 'dashboard':
            showDashboard();
            break;
        case 'calendario':
            showCalendar();
            break;
        case 'citas':
            showAppointments();
            break;
        case 'pacientes':
            showPatients();
            break;
        case 'médicos':
        case 'doctores':
            showDoctors();
            break;
        case 'especialidades':
            showSpecialties();
            break;
        case 'reportes':
            showReports();
            break;
        case 'retroalimentación':
            showFeedback();
            break;
        case 'configuración':
            showSettings();
            break;
        default:
            showDashboard();
    }
}

// Dashboard section (original content)
function showDashboard() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Dashboard</h2>
        <div class="stats">
            <div class="stat-card">
                <div class="stat-value" id="totalAppointments">32</div>
                <div class="stat-label">Citas Totales</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" id="pendingAppointments">12</div>
                <div class="stat-label">Citas Pendientes</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" id="confirmedAppointments">16</div>
                <div class="stat-label">Citas Confirmadas</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" id="cancelledAppointments">4</div>
                <div class="stat-label">Citas Canceladas</div>
            </div>
        </div>
        <div class="chart-container">
            <h3 class="section-title">Análisis de Citas</h3>
            <div class="tabs">
                <button class="tab-btn active" data-tab="daily">Diario</button>
                <button class="tab-btn" data-tab="weekly">Semanal</button>
                <button class="tab-btn" data-tab="monthly">Mensual</button>
            </div>
            <div class="chart">
                <canvas id="appointmentsChart"></canvas>
            </div>
        </div>
        <div class="appointment-section">
            <div class="appointment-list">
                <h3 class="section-title">Citas de Hoy</h3>
                <div class="appointment-item">
                    <div class="appointment-info">
                        <div class="appointment-name">María García</div>
                        <div class="appointment-time">9:00 AM - Dr. Rodríguez</div>
                    </div>
                    <span class="appointment-status status-confirmed">Confirmada</span>
                </div>
                <div class="appointment-item">
                    <div class="appointment-info">
                        <div class="appointment-name">Juan Pérez</div>
                        <div class="appointment-time">10:30 AM - Dra. Martínez</div>
                    </div>
                    <span class="appointment-status status-pending">Pendiente</span>
                </div>
            </div>
            <div class="appointment-form">
                <h3 class="section-title">Registrar Nueva Cita</h3>
                <form id="newAppointmentForm">
                    <div class="form-group">
                        <label for="patientName">Nombre del Paciente</label>
                        <input type="text" id="patientName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="doctorSelect">Doctor</label>
                        <select id="doctorSelect" class="form-control" required>
                            <option value="">Seleccionar doctor</option>
                            <option value="1">Dr. Rodríguez - Cardiología</option>
                            <option value="2">Dra. Martínez - Pediatría</option>
                            <option value="3">Dr. Gutiérrez - Neurología</option>
                            <option value="4">Dra. Sánchez - Dermatología</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="appointmentDate">Fecha</label>
                        <input type="date" id="appointmentDate" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="appointmentTime">Hora</label>
                        <input type="time" id="appointmentTime" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="appointmentNotes">Notas</label>
                        <textarea id="appointmentNotes" class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-block">Registrar Cita</button>
                </form>
            </div>
        </div>
    `;
    
    // Re-initialize chart and events after DOM update
    setTimeout(() => {
        initializeDashboard();
    }, 100);
}

function showCalendar() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Calendario</h2>
        <div class="chart-container">
            <p>Vista de calendario próximamente...</p>
        </div>
    `;
}

function showAppointments() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Gestión de Citas</h2>
        <div class="chart-container">
            <h3>Lista de Todas las Citas</h3>
            <div class="appointment-item">
                <div class="appointment-info">
                    <div class="appointment-name">María García</div>
                    <div class="appointment-time">21/05/2025 - 9:00 AM - Dr. Rodríguez</div>
                </div>
                <span class="appointment-status status-confirmed">Confirmada</span>
            </div>
            <div class="appointment-item">
                <div class="appointment-info">
                    <div class="appointment-name">Juan Pérez</div>
                    <div class="appointment-time">22/05/2025 - 10:30 AM - Dra. Martínez</div>
                </div>
                <span class="appointment-status status-pending">Pendiente</span>
            </div>
        </div>
    `;
}

function showPatients() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Gestión de Pacientes</h2>
        <div class="chart-container">
            <h3>Listado de Pacientes</h3>
            <p>Funcionalidad de gestión de pacientes próximamente...</p>
        </div>
    `;
}

function showDoctors() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Gestión de Médicos</h2>
        <div class="chart-container">
            <h3>Listado de Médicos</h3>
            <div class="appointment-item">
                <div class="appointment-info">
                    <div class="appointment-name">Dr. Rodríguez</div>
                    <div class="appointment-time">Cardiología - Consultorio 101</div>
                </div>
                <span class="appointment-status status-confirmed">Activo</span>
            </div>
            <div class="appointment-item">
                <div class="appointment-info">
                    <div class="appointment-name">Dra. Martínez</div>
                    <div class="appointment-time">Pediatría - Consultorio 205</div>
                </div>
                <span class="appointment-status status-confirmed">Activo</span>
            </div>
        </div>
    `;
}

function showSpecialties() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Especialidades Médicas</h2>
        <div class="stats">
            <div class="stat-card">
                <div class="stat-value">4</div>
                <div class="stat-label">Especialidades</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">12</div>
                <div class="stat-label">Médicos Activos</div>
            </div>
        </div>
    `;
}

function showReports() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Reportes</h2>
        <div class="chart-container">
            <h3>Reportes del Sistema</h3>
            <p>Funcionalidad de reportes próximamente...</p>
        </div>
    `;
}

function showFeedback() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Retroalimentación de Pacientes</h2>
        <div class="feedback-container">
            <div class="feedback-item">
                <div class="feedback-header">
                    <div class="feedback-patient">María García</div>
                    <div class="feedback-date">15/05/2025</div>
                </div>
                <div class="rating">★★★★☆</div>
                <div class="feedback-text">Excelente atención.</div>
            </div>
        </div>
    `;
}

function showSettings() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h2 class="section-title">Configuración del Sistema</h2>
        <div class="chart-container">
            <h3>Configuraciones</h3>
            <p>Panel de configuración próximamente...</p>
        </div>
    `;
}

// Function to reinitialize dashboard components
function initializeDashboard() {
    // Reinitialize chart
    const ctx = document.getElementById('appointmentsChart');
    if (ctx) {
        appointmentsChart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
                datasets: [
                    {
                        label: 'Programadas',
                        data: [8, 10, 6, 9, 12, 4, 5],
                        borderColor: '#2563eb',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Completadas',
                        data: [6, 8, 5, 7, 10, 3, 4],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Canceladas',
                        data: [2, 1, 1, 2, 1, 1, 1],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Reinitialize form events
    const form = document.getElementById('newAppointmentForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Set minimum date
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
}

// Form submit handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const doctorSelect = document.getElementById('doctorSelect');
    const doctorText = doctorSelect.options[doctorSelect.selectedIndex].text;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    
    const today = new Date().toISOString().split('T')[0];
    const isToday = appointmentDate === today;
    
    if (isToday) {
        const appointmentList = document.querySelector('.appointment-list');
        const newAppointment = document.createElement('div');
        newAppointment.className = 'appointment-item';
        newAppointment.innerHTML = `
            <div class="appointment-info">
                <div class="appointment-name">${patientName}</div>
                <div class="appointment-time">${appointmentTime} - ${doctorText.split(' - ')[0]}</div>
            </div>
            <span class="appointment-status status-pending">Pendiente</span>
        `;
        
        appointmentList.appendChild(newAppointment);
    }
    
    const total = parseInt(document.getElementById('totalAppointments').textContent);
    const pending = parseInt(document.getElementById('pendingAppointments').textContent);
    document.getElementById('totalAppointments').textContent = total + 1;
    document.getElementById('pendingAppointments').textContent = pending + 1;
    
    alert('Cita registrada exitosamente');
    e.target.reset();
}