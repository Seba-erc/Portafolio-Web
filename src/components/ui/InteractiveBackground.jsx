import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      active: false
    };

    const isMobile = width < 768;
    const particleCount = isMobile ? 38 : 75;
    const maxLinkDist = isMobile ? 120 : 155;
    const mouseLinkDist = isMobile ? 150 : 220;

    const palette = [
      { r: 124, g: 108, b: 255 }, // violeta
      { r: 79, g: 140, b: 255 },  // azul
      { r: 56, g: 189, b: 248 }   // cian suave
    ];

    const particles = Array.from({ length: particleCount }, (_, i) => {
      const color = palette[i % palette.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.8 + 1,
        color,
        pulse: Math.random() * Math.PI * 2
      };
    });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mx', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--my', `${e.clientY}px`);
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
        if (spotlightRef.current) {
          spotlightRef.current.style.setProperty('--mx', `${e.touches[0].clientX}px`);
          spotlightRef.current.style.setProperty('--my', `${e.touches[0].clientY}px`);
        }
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Suavizar posición del mouse (interpolación)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Halo suave siguiendo el cursor en el canvas
      if (mouse.active) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouseLinkDist * 1.35);
        grad.addColorStop(0, 'rgba(124, 108, 255, 0.13)');
        grad.addColorStop(0.5, 'rgba(79, 140, 255, 0.05)');
        grad.addColorStop(1, 'rgba(7, 8, 13, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Actualizar y dibujar partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += 0.025;
        p.x += p.vx;
        p.y += p.vy;

        // Rebote suave en bordes
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interacción con el mouse: atracción sutil + conexión luminosa
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        if (mouse.active && distMouse < mouseLinkDist && distMouse > 1) {
          const force = (1 - distMouse / mouseLinkDist) * 0.018;
          p.x += dxMouse * force;
          p.y += dyMouse * force;

          const alpha = (1 - distMouse / mouseLinkDist) * 0.55;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(147, 135, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Conexiones entre partículas cercanas
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Dibujar nodo
        const glowAlpha = 0.55 + Math.sin(p.pulse) * 0.25;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${glowAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="animated-background" ref={spotlightRef} aria-hidden="true">
      <div className="bg-aurora bg-aurora-1"></div>
      <div className="bg-aurora bg-aurora-2"></div>
      <div className="bg-grid-spotlight"></div>
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
}
