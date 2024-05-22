# Generated by Django 4.1 on 2022-09-07 15:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criado', models.DateField(auto_now_add=True, verbose_name='Data de Criação')),
                ('modificado', models.DateField(auto_now=True, verbose_name='Data de Atualização')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo?')),
                ('nome', models.CharField(max_length=30, verbose_name='Nome')),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
            },
        ),
        migrations.CreateModel(
            name='Leitor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criado', models.DateField(auto_now_add=True, verbose_name='Data de Criação')),
                ('modificado', models.DateField(auto_now=True, verbose_name='Data de Atualização')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo?')),
                ('nome', models.CharField(max_length=50, verbose_name='Nome')),
                ('telefone', models.CharField(help_text='Por favor use o seguinte formato: <em>XX XXXXX-XXXX</em>.', max_length=13, verbose_name='Telefone')),
                ('email', models.EmailField(max_length=50, verbose_name='Email')),
                ('status', models.BooleanField(choices=[(True, 'Desbloqueado'), (False, 'Bloqueado')], default=True, max_length=12, verbose_name='Status')),
            ],
            options={
                'verbose_name': 'Leitor',
                'verbose_name_plural': 'Leitores',
            },
        ),
        migrations.CreateModel(
            name='Livro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criado', models.DateField(auto_now_add=True, verbose_name='Data de Criação')),
                ('modificado', models.DateField(auto_now=True, verbose_name='Data de Atualização')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo?')),
                ('codigo', models.CharField(max_length=15, unique=True, verbose_name='Codigo')),
                ('nome', models.CharField(max_length=100, verbose_name='Nome')),
                ('autor', models.CharField(default='Desconhecido', max_length=100, verbose_name='Autor')),
                ('status', models.BooleanField(choices=[(True, 'Disponível'), (False, 'Indisponível')], default=True, max_length=12, verbose_name='Status')),
                ('categoria', models.ForeignKey(default='Geral', on_delete=django.db.models.deletion.CASCADE, to='core.categoria')),
            ],
            options={
                'verbose_name': 'Livro',
                'verbose_name_plural': 'Livros',
            },
        ),
        migrations.CreateModel(
            name='Emprestimo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criado', models.DateField(auto_now_add=True, verbose_name='Data de Criação')),
                ('modificado', models.DateField(auto_now=True, verbose_name='Data de Atualização')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo?')),
                ('devolucao', models.DateField(help_text='Selecione uma data posterior a atual', verbose_name='Data de devolução')),
                ('status', models.BooleanField(choices=[(True, 'Em andamento'), (False, 'Finalizado')], default=True, max_length=12, verbose_name='Status')),
                ('leitor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.leitor')),
                ('livro', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.livro')),
            ],
            options={
                'verbose_name': 'Empréstimo',
                'verbose_name_plural': 'Empréstimos',
            },
        ),
    ]