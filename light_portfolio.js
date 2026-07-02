/* JS CONTROLLER: 3D LIGHT PORTFOLIO WEBSITE */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. THREE.JS: GLOBAL 3D BACKGROUND
  // ==========================================
  let scene, camera, renderer, gridMesh, pointSystem;
  let targetRotationX = 0, targetRotationY = 0;
  let currentRotationX = 0, currentRotationY = 0;
  const mouse = { x: 0, y: 0 };
  
  function initGlobalBackground() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfcfbf9); // Light background matching CSS
    scene.fog = new THREE.FogExp2(0xfcfbf9, 0.0018);
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 150, 400);
    camera.lookAt(0, 0, 0);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    // Create a 3D structural grid plane representing supply lines
    const gridWidth = 900;
    const gridHeight = 900;
    const segments = 24;
    const geometry = new THREE.PlaneGeometry(gridWidth, gridHeight, segments, segments);
    
    // Displace vertices to create a structural trade landscape
    const posAttr = geometry.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      // Generate waves representing operational dynamics
      const z = Math.sin(x * 0.01) * Math.cos(y * 0.01) * 35 + Math.sin(x * 0.02) * 10;
      posAttr.setZ(i, z);
    }
    geometry.computeVertexNormals();
    
    const material = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      wireframe: true,
      transparent: true,
      opacity: 0.06
    });
    
    gridMesh = new THREE.Mesh(geometry, material);
    gridMesh.rotation.x = -Math.PI / 2.3; // Tilt plane away
    gridMesh.position.y = -60;
    scene.add(gridMesh);
    
    // Add golden glowing nodes at intersection points
    const pointsGeom = new THREE.BufferGeometry();
    const positions = [];
    const count = posAttr.count;
    
    for (let i = 0; i < count; i++) {
      if (Math.random() > 0.7) { // Only place on some intersections
        positions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i) + 1.5);
      }
    }
    
    pointsGeom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xb45309, // Gold nodes
      size: 5,
      transparent: true,
      opacity: 0.6
    });
    
    pointSystem = new THREE.Points(pointsGeom, pointsMat);
    gridMesh.add(pointSystem); // Parent points to grid for linked movement
    
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
    
    animate();
  }
  
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    targetRotationY = mouse.x * 0.18;
    targetRotationX = -mouse.y * 0.12;
  }
  
  function animate() {
    requestAnimationFrame(animate);
    
    // Move landscape slowly
    if (gridMesh) {
      gridMesh.rotation.z += 0.0003;
    }
    
    // Parallax damping
    currentRotationY += (targetRotationY - currentRotationY) * 0.04;
    currentRotationX += (targetRotationX - currentRotationX) * 0.04;
    
    if (scene) {
      scene.rotation.y = currentRotationY;
      scene.rotation.x = currentRotationX;
    }
    
    renderer.render(scene, camera);
  }
  
  try {
    initGlobalBackground();
  } catch (err) {
    console.warn("WebGL background failed initialization.", err);
  }
  
  // ==========================================
  // 2. THREE.JS: HERO 3D WIDGET (GYROSCOPE)
  // ==========================================
  let widgetScene, widgetCamera, widgetRenderer, widgetMesh, ring1, ring2;
  let widgetHover = false;
  
  function initHeroWidget() {
    const container = document.getElementById('canvas-3d-widget');
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    widgetScene = new THREE.Scene();
    
    widgetCamera = new THREE.PerspectiveCamera(45, width / height, 1, 100);
    widgetCamera.position.z = 12;
    
    widgetRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    widgetRenderer.setSize(width, height);
    widgetRenderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(widgetRenderer.domElement);
    
    const sphereGeom = new THREE.IcosahedronGeometry(2.2, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a, // Corporate Navy Sphere Core
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    widgetMesh = new THREE.Mesh(sphereGeom, sphereMat);
    widgetScene.add(widgetMesh);
    
    const ring1Geom = new THREE.TorusGeometry(3.2, 0.05, 8, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xb45309, // Gold Orbit Ring
      transparent: true,
      opacity: 0.8
    });
    ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    widgetScene.add(ring1);
    
    const ring2Geom = new THREE.TorusGeometry(3.6, 0.04, 8, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x475569, // Muted Steel Ring
      transparent: true,
      opacity: 0.5
    });
    ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 2;
    widgetScene.add(ring2);
    
    const count = 30;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 * Math.random();
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xb45309,
      size: 0.09,
      transparent: true,
      opacity: 0.8
    });
    const pts = new THREE.Points(geom, mat);
    widgetMesh.add(pts);
    
    container.addEventListener('mouseenter', () => widgetHover = true);
    container.addEventListener('mouseleave', () => widgetHover = false);
    
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    });
    
    window.addEventListener('mouseup', () => isDragging = false);
    
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      
      widgetMesh.rotation.y += deltaX * 0.008;
      widgetMesh.rotation.x += deltaY * 0.008;
      
      prevMousePos = { x: e.clientX, y: e.clientY };
    });
    
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        widgetCamera.aspect = w / h;
        widgetCamera.updateProjectionMatrix();
        widgetRenderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);
    
    widgetAnimate();
  }
  
  function widgetAnimate() {
    requestAnimationFrame(widgetAnimate);
    
    const time = Date.now() * 0.001;
    const speedMultiplier = widgetHover ? 2.5 : 1.0;
    
    widgetMesh.rotation.y += 0.006 * speedMultiplier;
    widgetMesh.rotation.z += 0.002 * speedMultiplier;
    
    ring1.rotation.y += 0.012 * speedMultiplier;
    ring1.rotation.x += 0.004 * speedMultiplier;
    
    ring2.rotation.z -= 0.006 * speedMultiplier;
    ring2.rotation.x += 0.008 * speedMultiplier;
    
    const pulse = 1.0 + Math.sin(time * 3) * 0.03 * speedMultiplier;
    widgetMesh.scale.set(pulse, pulse, pulse);
    
    widgetRenderer.render(widgetScene, widgetCamera);
  }
  
  try {
    initHeroWidget();
  } catch (err) {
    console.warn("Hero WebGL widget failed.", err);
  }
  
  // ==========================================
  // 3. REAL-TIME CSS 3D TILT PHYSICS FOR CARDS
  // ==========================================
  const tiltCards = document.querySelectorAll('.card-tilt');
  const maxTilt = 8;
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;
      
      const xVal = (x / width) - 0.5;
      const yVal = (y / height) - 0.5;
      
      const tiltX = -(yVal * maxTilt).toFixed(2);
      const tiltY = (xVal * maxTilt).toFixed(2);
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
  
  // ==========================================
  // 4. INTERACTIVE TYPEWRITER SUBTITLE
  // ==========================================
  const words = [
    "Commercial Operations Leader",
    "B2B Supply Chain Strategist",
    "AI Vibe Coding Enthusiast",
    "Procurement & CLM Expert"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriter = document.getElementById('typewriter');
  
  function typeEffect() {
    if (!typewriter) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typewriter.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriter.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 70;
    
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }
    
    setTimeout(typeEffect, typeSpeed);
  }
  
  typeEffect();
  
  // ==========================================
  // 5. INTERACTIVE 3D EXPERIENCE CAROUSEL
  // ==========================================
  const expCards = Array.from(document.querySelectorAll('.exp-card'));
  const prevBtn = document.getElementById('prev-exp');
  const nextBtn = document.getElementById('next-exp');
  const progressText = document.getElementById('deck-progress');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  let filteredCards = [...expCards];
  let currentDeckIndex = 0;
  
  function updateDeckLayout() {
    if (filteredCards.length === 0) {
      progressText.textContent = "0 / 0";
      return;
    }
    
    if (currentDeckIndex >= filteredCards.length) currentDeckIndex = 0;
    if (currentDeckIndex < 0) currentDeckIndex = filteredCards.length - 1;
    
    expCards.forEach(card => {
      card.classList.remove('active', 'prev-card', 'next-card');
      card.style.display = 'none';
    });
    
    const active = filteredCards[currentDeckIndex];
    active.style.display = 'flex';
    active.classList.add('active');
    
    if (filteredCards.length > 1) {
      const prevIdx = (currentDeckIndex - 1 + filteredCards.length) % filteredCards.length;
      const prevCard = filteredCards[prevIdx];
      prevCard.style.display = 'flex';
      prevCard.classList.add('prev-card');
      
      const nextIdx = (currentDeckIndex + 1) % filteredCards.length;
      const nextCard = filteredCards[nextIdx];
      nextCard.style.display = 'flex';
      nextCard.classList.add('next-card');
    }
    
    progressText.textContent = `${currentDeckIndex + 1} / ${filteredCards.length}`;
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentDeckIndex--;
      updateDeckLayout();
    });
    
    nextBtn.addEventListener('click', () => {
      currentDeckIndex++;
      updateDeckLayout();
    });
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const cat = btn.getAttribute('data-filter');
      
      if (cat === 'all') {
        filteredCards = [...expCards];
      } else {
        filteredCards = expCards.filter(c => c.getAttribute('data-cat') === cat);
      }
      
      currentDeckIndex = 0;
      updateDeckLayout();
    });
  });
  
  updateDeckLayout();
  
  // ==========================================
  // 6. LIVE DRAG-AND-DROP KANBAN CRM
  // ==========================================
  let draggedCard = null;
  
  function initKanbanDragDrop() {
    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-cards-wrapper');
    
    cards.forEach(card => {
      card.addEventListener('dragstart', handleDragStart);
      card.addEventListener('dragend', handleDragEnd);
    });
    
    columns.forEach(col => {
      col.addEventListener('dragover', handleDragOver);
      col.addEventListener('dragenter', handleDragEnter);
      col.addEventListener('dragleave', handleDragLeave);
      col.addEventListener('drop', handleDrop);
    });
  }
  
  function handleDragStart() {
    draggedCard = this;
    setTimeout(() => this.classList.add('dragging'), 0);
  }
  
  function handleDragEnd() {
    this.classList.remove('dragging');
    draggedCard = null;
  }
  
  function handleDragOver(e) {
    e.preventDefault();
  }
  
  function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  }
  
  function handleDragLeave() {
    this.classList.remove('drag-over');
  }
  
  function handleDrop() {
    this.classList.remove('drag-over');
    if (draggedCard) {
      this.appendChild(draggedCard);
      recalculateKanbanCounts();
    }
  }
  
  function recalculateKanbanCounts() {
    const columns = ['prospect', 'negotiation', 'tariff', 'completed'];
    columns.forEach(col => {
      const colEl = document.querySelector(`[data-status="${col}"]`);
      const countEl = document.getElementById(`count-${col}`);
      if (colEl && countEl) {
        countEl.textContent = colEl.children.length;
      }
    });
  }
  
  const resetBtn = document.getElementById('reset-board-btn');
  const addLeadBtn = document.getElementById('add-lead-btn');
  const addLeadModal = document.getElementById('add-lead-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSubmitBtn = document.getElementById('modal-submit-btn');
  
  const defaultBoardHTML = document.querySelector('.kanban-grid') ? document.querySelector('.kanban-grid').innerHTML : '';
  
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const grid = document.querySelector('.kanban-grid');
      if (grid) {
        grid.innerHTML = defaultBoardHTML;
        initKanbanDragDrop();
        recalculateKanbanCounts();
      }
    });
  }
  
  if (addLeadBtn && addLeadModal) {
    addLeadBtn.addEventListener('click', () => {
      addLeadModal.classList.add('active');
    });
    
    modalCloseBtn.addEventListener('click', () => {
      addLeadModal.classList.remove('active');
    });
    
    modalSubmitBtn.addEventListener('click', () => {
      const company = document.getElementById('lead-company').value.trim();
      const tag = document.getElementById('lead-tag').value;
      const val = document.getElementById('lead-value').value;
      const desc = document.getElementById('lead-desc').value.trim();
      
      if (!company || !val) {
        alert("Please enter a Company Name and Target Value.");
        return;
      }
      
      const newCard = document.createElement('div');
      newCard.className = 'kanban-card';
      newCard.draggable = true;
      newCard.id = `lead-${Date.now()}`;
      
      let tagClass = 'tag-electronics';
      if (tag === 'Electronics Sourcing') tagClass = 'tag-sourcing';
      if (tag === 'Customs & Logistics') tagClass = 'tag-logistics';
      
      newCard.innerHTML = `
        <div class="card-tag ${tagClass}">${tag}</div>
        <h5>${company}</h5>
        <div class="card-detail-row">
          <span>Target Value:</span>
          <strong>$${parseInt(val).toLocaleString()}</strong>
        </div>
        <div class="card-detail-row">
          <span>Details:</span>
          <strong>${desc || 'N/A'}</strong>
        </div>
      `;
      
      newCard.addEventListener('dragstart', handleDragStart);
      newCard.addEventListener('dragend', handleDragEnd);
      
      const prospectWrapper = document.querySelector('[data-status="prospect"]');
      if (prospectWrapper) {
        prospectWrapper.appendChild(newCard);
        recalculateKanbanCounts();
      }
      
      document.getElementById('lead-company').value = '';
      document.getElementById('lead-value').value = '';
      document.getElementById('lead-desc').value = '';
      addLeadModal.classList.remove('active');
    });
  }
  
  initKanbanDragDrop();
  
  // ==========================================
  // 7. INTERSECTION OBSERVER SCROLL REVEALS
  // ==========================================
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  
  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });
  
  scrollElements.forEach(el => elementObserver.observe(el));
  
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 250)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
  
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn.textContent;
      submitBtn.textContent = 'Transmitting...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Message Secured ✓';
        submitBtn.style.background = '#b45309';
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.textContent = origText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
