# TRABAJO PRÁCTICO N°3

  
## Universidad Nacional de Córdoba

**Carrera:** Ingeniería en Computación

**Cátedra:** Comunicaciones de Datos

**Docentes:** Santiago M. Henn — Facundo Oliva Cuneo

**Fecha de entrega:** 22/09/2025

---

## Integrantes (Grupo *Latency Killers*)

  

-  **Dante Augsburger**

📧 *dante.augsburger@mi.unc.edu.ar*

-  **Martino Fioramonti**

📧 *martino.fioramonti@mi.unc.edu.ar*

-  **Tadeo Antonino**

📧 *tadeo.antonino@mi.unc.edu.ar*

-  **Ignacio Quintana**

📧 *ignacio.agustin.quintana@mi.unc.edu.ar*

---


## Resumen

HACER RESUMEN

Palabras clave:

---


## Introducción

HACER INTRO 

---


## Consigna 1

## Primera Parte: Capas de Acceso en Redes Locales, Protocolos y Fundamentos

## 1) Alcance de Redes y Virtualización

### a) Clasificación de las redes según su alcance

Las redes se clasifican según su **cobertura geográfica** y **alcance físico**.  
A continuación se detallan los principales tipos:

| Tipo de red | Acrónimo | Alcance aproximado | Características principales |
|--------------|-----------|--------------------|------------------------------|
| **Personal Area Network** | **PAN** | Hasta unos pocos metros | Conecta dispositivos personales (celular, auriculares Bluetooth, smartwatch). Baja potencia y corto alcance. |
| **Local Area Network** | **LAN** | Hasta 1 km | Red de área local. Conecta computadoras y dispositivos en una misma ubicación (hogar, oficina, escuela). Alta velocidad y bajo retardo. |
| **Metropolitan Area Network** | **MAN** | Hasta decenas de km | Interconecta varias LAN dentro de una ciudad o campus. Usada por proveedores o instituciones grandes. |
| **Wide Area Network** | **WAN** | De cientos a miles de km | Conecta redes a nivel nacional o internacional (por ejemplo, Internet). Utiliza enlaces de larga distancia (fibra óptica, satélite, etc.). |
| **Storage Area Network** | **SAN** | Variable (LAN o mayor) | Red dedicada al almacenamiento de datos. Alta velocidad y baja latencia para servidores. |
| **Virtual Local Area Network** | **VLAN** | Virtual | Subdivisión lógica dentro de una LAN física. Aísla el tráfico de distintos grupos sin requerir hardware adicional. |

📘 **En la figura correspondiente:**  
PAN → más chico · LAN → intermedio · MAN → regional · WAN → más grande

---

### b) ¿Qué es una VLAN? ¿Cómo se clasifican?

Una **VLAN (Virtual Local Area Network)** es una **red local virtual** que permite **dividir lógicamente una red física** en varios segmentos independientes.  
Cada VLAN funciona como si fuera una red separada, aunque los dispositivos estén conectados al mismo switch físico.

**Ventajas principales:**
- Segmentación del tráfico (mejor rendimiento).  
- Mayor seguridad (aislamiento entre grupos).  
- Administración flexible (sin recablear físicamente).

**Clasificación de las VLANs:**

| Tipo de VLAN | Descripción |
|---------------|-------------|
| **VLAN por puerto (estática)** | Se asigna manualmente cada puerto del switch a una VLAN. Es la más común. |
| **VLAN dinámica** | Los puertos se asignan automáticamente según la dirección MAC, usuario o protocolo, usando un servidor VMPS. |
| **VLAN por protocolo** | Se agrupan los dispositivos según el protocolo de capa 3 utilizado (por ejemplo, IPv4, IPv6, IPX). |
| **VLAN por dirección MAC** | Se asignan dispositivos a VLANs según su dirección física (MAC). |

---

### c) Protocolo IEEE 802.1Q

El estándar **IEEE 802.1Q** define el **mecanismo de etiquetado (tagging)** que permite identificar a qué VLAN pertenece cada trama Ethernet, es decir, IEEE 802.1Q define cómo se marcan las tramas para mantener la separación lógica de VLANs dentro de una misma infraestructura física.  
Esto permite que múltiples VLANs viajen sobre un **único enlace físico** (por ejemplo, entre dos switches o entre un switch y un router).

**Características principales:**
- Añade una **etiqueta de 4 bytes** dentro de la trama Ethernet original.  
- Esta etiqueta contiene el **VLAN ID (VID)**, que identifica la VLAN (valor entre 1 y 4094).  
- Permite el **trunking**, es decir, el transporte simultáneo de varias VLANs por un mismo enlace.


---

### d) ¿Qué es el *Tagging*?

El **Tagging** es el proceso mediante el cual se **inserta la etiqueta 802.1Q** en la trama Ethernet para identificar su VLAN de origen.

- En un **enlace troncal (trunk)**, el switch **etiqueta (tag)** las tramas salientes con el **VLAN ID** para que el dispositivo receptor sepa a qué VLAN pertenece.  
- En los **enlaces de acceso (access ports)**, las tramas **no van etiquetadas**, porque solo pertenecen a una VLAN.
