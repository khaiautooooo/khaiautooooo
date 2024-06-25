import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.command()
async def ping(ctx):
    latency = round(bot.latency * 1000) 
    await ctx.send(f'Pong! {latency} ms')

bot.run('# bot token kalean')
