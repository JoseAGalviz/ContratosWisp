-- Script de creación de base de datos para WISP Tachira
-- Importar este archivo en phpMyAdmin

CREATE DATABASE IF NOT EXISTS wisp_contracts;
USE wisp_contracts;

CREATE TABLE IF NOT EXISTS Contracts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Información del Cliente
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    ci VARCHAR(50) NOT NULL,
    dob VARCHAR(50),
    phone VARCHAR(50),
    email VARCHAR(255),
    address TEXT,
    rif VARCHAR(50),
    razonSocial VARCHAR(255),
    
    -- Información del Servicio
    plan VARCHAR(100) DEFAULT '250 Mbps',
    paymentMethod VARCHAR(100),
    
    -- Formato del contrato: 'standard' o 'promo' (u otros valores futuros)
    template VARCHAR(50) DEFAULT 'standard',
    
    -- Selección de meses para promoción (JSON array de strings)
    promoMonths TEXT DEFAULT '[]',
    
    -- Detalles Técnicos (Hoja de Fibra)
    routerModel VARCHAR(255),
    technician VARCHAR(255),
    installDate VARCHAR(50),
    
    -- Equipos (Préstamo)
    onuSerial VARCHAR(255),
    macAddress VARCHAR(255),
    
    -- Orden de Instalación
    napCode VARCHAR(100),
    napPort VARCHAR(100),
    oltPort VARCHAR(100),
    ipAddress VARCHAR(100),
    coordinates VARCHAR(255),
    
    -- Notas y Observaciones
    notes TEXT,
    
    -- Metadatos
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
