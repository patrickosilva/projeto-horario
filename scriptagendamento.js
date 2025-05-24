document.getElementById('form-agendamento').addEventListener('submit', function(event) {
  event.preventDefault();

  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const horario = document.getElementById('horario').value;

  const mensagem = `Novo agendamento:
  Serviço: ${servico}
  Data: ${data}
  Horário: ${horario}`;

  // Exibir mensagem na tela
  document.getElementById('mensagem').innerText = "Agendamento realizado com sucesso!";

  // Enviar e-mail (Exemplo de como poderia ser com mailto)
  window.location.href = `mailto:pampamsilv@gmail.com?subject=Novo Agendamento&body=${encodeURIComponent(mensagem)}`;
});
