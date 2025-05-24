document
  .getElementById("form-agendamento")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    if (!servico || !data || !horario) {
      document.getElementById("mensagem").innerText =
        "Por favor, preencha todos os campos antes de agendar.";
      document.getElementById("mensagem").style.color = "red";
      return;
    }

    document.getElementById("mensagem").innerText =
      "Agendamento confirmado! Redirecionando para o WhatsApp...";
    document.getElementById("mensagem").style.color = "green";

    const numero = "5521973073541";
    const mensagem = encodeURIComponent(
      `Agendei meu horário:\nServiço: ${servico}\nData: ${data}\nHorário: ${horario}`
    );
    const url = `https://wa.me/${numero}?text=${mensagem}`;

    // Redirecionamento direto
    window.location.href = url;
  });
